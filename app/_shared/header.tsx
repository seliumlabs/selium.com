"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./header.module.css";

export interface HeaderNav {
  name: string;
  href: string;
}

const utilityLinkClass =
  "text-sm/6 font-medium text-teal-300 hover:text-teal-200 visited:text-teal-300";

export default function Header({ nav = [] }: { nav?: HeaderNav[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} bg-transparent border-b border-white/10 backdrop-blur-xl`}>
      <nav aria-label="Global" className={styles.nav}>
        <a href="/#top" className="-m-1.5 p-1.5">
          <div className="text-3xl font-semibold tracking-tight flex text-white">
            Selium<span className="animate-pulse-logo-text">.</span>
          </div>
        </a>
        <div className={styles.mobileMenuTrigger}>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className={styles.desktopNav}>
          {nav.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 text-white/80 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          {nav.length > 0 ? <div className="h-4 w-px bg-white/20" aria-hidden="true"></div> : null}
          <a href="/" className={utilityLinkClass}>
            Home
          </a>
          <a href="/news" className={utilityLinkClass}>
            News
          </a>
          <a href="/docs" className={utilityLinkClass}>
            Docs
          </a>
          <a href="https://github.com/seliumlabs/selium" className={utilityLinkClass}>
            GitHub
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className={styles.mobileDialog}>
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
                {nav.map((item) => (
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
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-teal-300 hover:bg-white/5 hover:text-teal-200 visited:text-teal-300"
                >
                  Home
                </a>
                <a
                  href="/news"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-teal-300 hover:bg-white/5 hover:text-teal-200 visited:text-teal-300"
                >
                  News
                </a>
                <a
                  href="/docs"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-teal-300 hover:bg-white/5 hover:text-teal-200 visited:text-teal-300"
                >
                  Docs
                </a>
                <a
                  href="https://github.com/seliumlabs/selium"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-teal-300 hover:bg-white/5 hover:text-teal-200 visited:text-teal-300"
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
