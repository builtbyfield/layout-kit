import { Tag } from "@markdoc/markdoc";
import { type ReactNode, createElement } from "react";
import { join } from "tailwind-merge";

type HeadingProps = {
  children: ReactNode;
  className: string;
  id?: string;
  level?: number;
};

function Heading({ id = "", level = 1, children, className }: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      id,
      className: join(
        "first:mt-0 last:mb-0 font-sans",
        level === 1 && "text-4xl font-semibold tracking-tighter mt-12 mb-3",
        level === 2 && "text-2xl font-semibold tracking-tight mt-12 mb-3",
        level === 3 && "text-xl font-semibold mt-12 mb-3",
        className
      ),
    },
    children
  );
}

function generateID(children: any[], attributes: { id: string }) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  return children
    .filter((child) => typeof child === "string")
    .join(" ")
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export const heading = {
  render: Heading,
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
    className: { type: String },
  },
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    return new Tag(this.render, { ...attributes, id }, children);
  },
};
