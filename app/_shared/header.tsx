"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface Nav {
  name: string;
  href: string;
}

const navigation: Nav[] = [
  { name: "Features", href: "/#features" },
  { name: "Use cases", href: "/#use-cases" },
  { name: "Security", href: "/#security" },
  { name: "Get started", href: "/#get-started" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-xl border-b border-white/10">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <a href="/#top" className="-m-1.5 p-1.5">
          <div className="text-3xl font-semibold tracking-tight flex text-white">
            Selium<span className="animate-pulse-logo-text">.</span>
          </div>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 text-white/80 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <div>
            <a
              href="/docs"
              className="rounded-md rounded-tr-none rounded-br-none border border-white border-r-0 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 hover:border-gray-200"
            >
              Docs
            </a>
            <a
              href="https://github.com/seliumlabs/selium"
              className="rounded-md rounded-tl-none rounded-bl-none border border-white/20 border-l-0 px-3 py-1.5 text-sm font-semibold text-white hover:border-white/60"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/#top" className="-m-1.5 p-1.5">
              <span className="sr-only">Selium</span>
              <span className="animate-pulse-logo w-6 h-6 rounded-full inline-flex items-center justify-center"></span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="space-y-2 py-6">
                <a
                  href="/docs"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Docs
                </a>
                <a
                  href="https://github.com/seliumlabs/selium"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
