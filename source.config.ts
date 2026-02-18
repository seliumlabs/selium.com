import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import rehypePrettyCode from "rehype-pretty-code";
import { z } from "zod";

const prettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
  onVisitLine(node: { children: unknown[] }) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: { properties: { className?: string[] } }) {
    node.properties.className ??= [];
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node: { properties: { className?: string[] } }) {
    node.properties.className ??= [];
    node.properties.className.push("word--highlighted");
  },
};

export const docs = defineDocs({
  dir: "content/docs",
});

export const news = defineDocs({
  dir: "content/news",
  docs: {
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      author: z.string(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    preset: "fumadocs",
    rehypeCodeOptions: false,
    rehypePlugins: (plugins) => [...plugins, [rehypePrettyCode, prettyCodeOptions]],
  },
});
