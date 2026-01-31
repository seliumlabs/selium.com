#!/bin/sh
# This script downloads and installs Selium Runtime, Selium CLI, and core Selium modules.
# It also generates self-signed certificates for the Remote Client module to use.
#
# Much of this script is borrowed with many thanks from Rustup (https://rustup.rs).

set -eu

SELIUM_URL=https://github.com/seliumlabs/selium/releases/download
MODULES_URL=https://github.com/seliumlabs/selium-modules/releases/download
MODULES="
remote-client-0.3.1/selium-remote-client-server-wasm32-unknown-unknown.tar.gz
switchboard-0.4.1/selium-switchboard-server-wasm32-unknown-unknown.tar.gz
atlas-0.2.1/selium-atlas-server-wasm32-unknown-unknown.tar.gz
"

main() {
    need_cmd curl
    need_cmd install
    need_cmd mkdir
    need_cmd rm
    need_cmd tar
    need_cmd uname

    get_architecture || return 1
    local _arch="$RETVAL"
    assert_nz "$_arch" "arch"

    mkdir -p $HOME/selium/modules $HOME/.local/bin

    cd $HOME/selium

    # Install Selium Runtime
    download "$SELIUM_URL/v1.0.0-alpha.5/selium-runtime-aarch64-unknown-linux-gnu.tar.gz" $HOME/.local/bin/
    chmod 755 $HOME/.local/bin/selium-runtime

    # Install Selium CLI
    download "$MODULES_URL/remote-client-0.3.1/selium-remote-cli-aarch64-unknown-linux-gnu.tar.gz" $HOME/.local/bin/
    chmod 755 $HOME/.local/bin/selium

    # Install Selium modules
    for mod in $MODULES; do
      download "$MODULES_URL/$mod" ./modules
    done

    # Generate certificates for localhost
    export PATH=$PATH:$HOME/.local/bin/
    selium-runtime generate-certs --output-dir ./certs --server-name localhost

    echo "All done! Make sure that $HOME/.local/bin is in your PATH to run Selium binaries."
}

get_architecture() {
    local _ostype _cputype _bitness _arch _clibtype
    _ostype="$(uname -s)"
    _cputype="$(uname -m)"
    _clibtype="gnu"

    if [ "$_ostype" = Linux ]; then
        if [ "$(uname -o)" = Android ]; then
            _ostype=Android
        fi
        if ldd --version 2>&1 | grep -q 'musl'; then
            _clibtype="musl"
        fi
    fi

    if [ "$_ostype" = Darwin ]; then
        # Darwin `uname -m` can lie due to Rosetta shenanigans. If you manage to
        # invoke a native shell binary and then a native uname binary, you can
        # get the real answer, but that's hard to ensure, so instead we use
        # `sysctl` (which doesn't lie) to check for the actual architecture.
        if [ "$_cputype" = i386 ]; then
            # Handling i386 compatibility mode in older macOS versions (<10.15)
            # running on x86_64-based Macs.
            # Starting from 10.15, macOS explicitly bans all i386 binaries from running.
            # See: <https://support.apple.com/en-us/HT208436>

            # Avoid `sysctl: unknown oid` stderr output and/or non-zero exit code.
            if sysctl hw.optional.x86_64 2> /dev/null || true | grep -q ': 1'; then
                _cputype=x86_64
            fi
        elif [ "$_cputype" = x86_64 ]; then
            # Handling x86-64 compatibility mode (a.k.a. Rosetta 2)
            # in newer macOS versions (>=11) running on arm64-based Macs.
            # Rosetta 2 is built exclusively for x86-64 and cannot run i386 binaries.

            # Avoid `sysctl: unknown oid` stderr output and/or non-zero exit code.
            if sysctl hw.optional.arm64 2> /dev/null || true | grep -q ': 1'; then
                _cputype=arm64
            fi
        fi
    fi

    if [ "$_ostype" = SunOS ]; then
        # Both Solaris and illumos presently announce as "SunOS" in "uname -s"
        # so use "uname -o" to disambiguate.  We use the full path to the
        # system uname in case the user has coreutils uname first in PATH,
        # which has historically sometimes printed the wrong value here.
        if [ "$(/usr/bin/uname -o)" = illumos ]; then
            _ostype=illumos
        fi

        # illumos systems have multi-arch userlands, and "uname -m" reports the
        # machine hardware name; e.g., "i86pc" on both 32- and 64-bit x86
        # systems.  Check for the native (widest) instruction set on the
        # running kernel:
        if [ "$_cputype" = i86pc ]; then
            _cputype="$(isainfo -n)"
        fi
    fi

    local _current_exe
    case "$_ostype" in

        Android | FreeBSD | NetBSD | DragonFly | illumos)
            bail "This OS is not yet supported by this installer script. Selium can still be installed from source."
            ;;

        Linux)
            _current_exe=$(get_current_exe)
            _ostype=unknown-linux-$_clibtype
            _bitness=$(get_bitness "$_current_exe")
            ;;

        Darwin)
            _ostype=apple-darwin
            ;;

        MINGW* | MSYS* | CYGWIN* | Windows_NT)
            _ostype=pc-windows-gnu
            ;;

        *)
            err "unrecognized OS type: $_ostype"
            exit 1
            ;;

    esac

    case "$_cputype" in

        i386 | i486 | i686 | i786 | x86 | xscale | arm | armv61 | armv71 | armv81 | mips | mips64 | ppc | ppc64 | ppc64le | s390x | riscv64 | loongarch64)
            bail "This architecture is not yet supported by the installer script. Selium can still be installed from source."
            ;;

        aarch64 | arm64)
            _cputype=aarch64
            ;;

        x86_64 | x86-64 | x64 | amd64)
            _cputype=x86_64
            ;;
        *)
            bail "unknown CPU type: $_cputype"

    esac

    # Detect 64-bit linux with 32-bit userland
    if [ "${_ostype}" = unknown-linux-gnu ] && [ "${_bitness}" -eq 32 ]; then
        case $_cputype in
            x86_64)
                if [ -n "${RUSTUP_CPUTYPE:-}" ]; then
                    _cputype="$RUSTUP_CPUTYPE"
                else {
                    # 32-bit executable for amd64 = x32
                    if is_host_amd64_elf "$_current_exe"; then {
                        bail "This architecture is not yet supported by the installer script. Selium can still be installed from source."
                    }; else
                        _cputype=i686
                    fi
                }; fi
                ;;
            aarch64)
                _cputype=armv7
                if [ "$_ostype" = "linux-android" ]; then
                    _ostype=linux-androideabi
                else
                    _ostype="${_ostype}eabihf"
                fi
                ;;
        esac
    fi

    _arch="${_cputype}-${_ostype}"

    RETVAL="$_arch"
}

get_bitness() {
    need_cmd head
    # Architecture detection without dependencies beyond coreutils.
    # ELF files start out "\x7fELF", and the following byte is
    #   0x01 for 32-bit and
    #   0x02 for 64-bit.
    # The printf builtin on some shells like dash only supports octal
    # escape sequences, so we use those.
    local _current_exe=$1
    local _current_exe_head
    _current_exe_head=$(head -c 5 "$_current_exe")
    if [ "$_current_exe_head" = "$(printf '\177ELF\001')" ]; then
        echo 32
    elif [ "$_current_exe_head" = "$(printf '\177ELF\002')" ]; then
        echo 64
    else
        err "unknown platform bitness"
        exit 1;
    fi
}

get_current_exe() {
    # Returns the executable used for system architecture detection
    # This is only run on Linux
    local _current_exe
    if test -L /proc/self/exe ; then
        _current_exe=/proc/self/exe
    else
        warn "Unable to find /proc/self/exe. System architecture detection might be inaccurate."
        if test -n "$SHELL" ; then
            _current_exe=$SHELL
        else
            need_cmd /bin/sh
            _current_exe=/bin/sh
        fi
        warn "Falling back to $_current_exe."
    fi
    echo "$_current_exe"
}

is_host_amd64_elf() {
    local _current_exe=$1

    need_cmd head
    need_cmd tail
    # ELF e_machine detection without dependencies beyond coreutils.
    # Two-byte field at offset 0x12 indicates the CPU,
    # but we're interested in it being 0x3E to indicate amd64, or not that.
    local _current_exe_machine
    _current_exe_machine=$(head -c 19 "$_current_exe" | tail -c 1)
    [ "$_current_exe_machine" = "$(printf '\076')" ]
}

bail() {
    printf '%s\n' "$1" >&2
    exit 1
}

download() {
    curl --proto '=https' --tlsv1.2 -sSfL "$1" -o tmp.tar.gz
    tar -C "$2" -xf tmp.tar.gz
    rm tmp.tar.gz
}

need_cmd() {
    if ! check_cmd "$1"; then
        err "need '$1' (command not found)"
        exit 1
    fi
}

check_cmd() {
    command -v "$1" > /dev/null 2>&1
}

assert_nz() {
    if [ -z "$1" ]; then
        err "assert_nz $2"
        exit 1
    fi
}

main
