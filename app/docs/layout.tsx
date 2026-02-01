import type { ReactNode } from "react";
import DocsProvider from "./DocsProvider";
import Header from "../_shared/header";
import Footer from "../_shared/footer";
import "fumadocs-ui/style.css";
import "./docs.css";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsProvider>
      <div className="docs-root dark h-screen w-full bg-gray-950 text-white">
        <div className="pointer-events-none fixed -top-24 left-1/2 h-105 w-180 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2),transparent_65%)] blur-2xl"></div>
        <div className="pointer-events-none fixed bottom-0 right-0 h-90 w-90 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] blur-2xl"></div>
        <Header />
        <main>{children}</main>
      </div>
    </DocsProvider>
  );
}
