import type { RenderableTreeNodes, Tag } from "@markdoc/markdoc";

type Section = Tag["attributes"] & {
  title: string;
};

export function collectHeadings(
  node: RenderableTreeNodes,
  sections: Section[] = []
) {
  const isTag = (node: RenderableTreeNodes): node is Tag =>
    typeof node === "object" && node !== null && "name" in node;

  if (node && isTag(node)) {
    if (node.name === "Heading") {
      const title = node.children[0];

      if (typeof title === "string") {
        sections.push({
          ...node.attributes,
          title,
        });
      }
    }

    if (node.children && isTag(node.children[0])) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}
