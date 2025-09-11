"use client";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Selium • The cloud, reimagined.
      </div>
    </footer>
  );
}
