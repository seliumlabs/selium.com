"use client";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.brand}>
            <span className="animate-pulse-logo w-3 h-3 rounded-full inline-flex items-center justify-center"></span>
            Selium
          </div>
          <p className={styles.tagline}>Software-defined WebAssembly hypervisor.</p>
        </div>
        <div className={styles.links}>
          <a href="/" className={styles.link}>
            Home
          </a>
          <a href="/news" className={styles.link}>
            News
          </a>
          <a href="/docs" className={styles.link}>
            Docs
          </a>
          <a href="https://github.com/seliumlabs/selium" className={styles.link}>
            GitHub
          </a>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Selium. The cloud, reimagined.
        </div>
      </div>
    </footer>
  );
}
