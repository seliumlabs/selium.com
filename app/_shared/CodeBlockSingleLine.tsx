"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SINGLE_LINE_ATTR = "data-single-line";

function countLines(codeElement: HTMLElement): number {
  const lines = codeElement.querySelectorAll(".line");
  if (lines.length > 0) {
    return lines.length;
  }

  const text = codeElement.textContent ?? "";
  const normalized = text.replace(/\n$/, "");
  return normalized.length === 0 ? 0 : normalized.split("\n").length;
}

function markSingleLineBlocks(): void {
  const figures = document.querySelectorAll<HTMLElement>("figure.shiki");
  figures.forEach((figure) => {
    const code = figure.querySelector<HTMLElement>("pre code");
    if (!code) {
      return;
    }

    const lineCount = countLines(code);
    if (lineCount <= 1) {
      figure.setAttribute(SINGLE_LINE_ATTR, "true");
    } else {
      figure.removeAttribute(SINGLE_LINE_ATTR);
    }
  });
}

export default function CodeBlockSingleLine(): null {
  const pathname = usePathname();

  useEffect(() => {
    markSingleLineBlocks();
  }, [pathname]);

  return null;
}
