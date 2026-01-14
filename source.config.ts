import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import rehypePrettyCode from "rehype-pretty-code";

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

export default defineConfig({
  mdxOptions: {
    preset: "fumadocs",
    rehypeCodeOptions: false,
    rehypePlugins: (plugins) => [...plugins, [rehypePrettyCode, prettyCodeOptions]],
  },
});
