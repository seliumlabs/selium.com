"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-white/70 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="animate-pulse-logo w-3 h-3 rounded-full inline-flex items-center justify-center"></span>
            Selium
          </div>
          <p className="mt-2 text-xs text-white/50">Software-defined WebAssembly hypervisor.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="/#features" className="hover:text-white">
            Features
          </a>
          <a href="/#use-cases" className="hover:text-white">
            Use cases
          </a>
          <a href="/#security" className="hover:text-white">
            Security
          </a>
          <a href="/#get-started" className="hover:text-white">
            Get started
          </a>
          <a href="/docs" className="hover:text-white">
            Docs
          </a>
          <a href="https://github.com/seliumlabs/selium" className="hover:text-white">
            GitHub
          </a>
        </div>
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Selium. The cloud, reimagined.
        </div>
      </div>
    </footer>
  );
}
