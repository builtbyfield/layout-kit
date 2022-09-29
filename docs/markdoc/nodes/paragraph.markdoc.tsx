import { type ReactNode, createElement } from "react";
import { join } from "tailwind-merge";

type ParagraphProps = {
  children: ReactNode;
  className: string;
};

function Paragraph({ children, className }: ParagraphProps) {
  return createElement(
    "p",
    {
      className: join("first:mt-0 last:mb-0 my-3", "text-gray-12", className),
    },
    children
  );
}

export const paragraph = {
  render: Paragraph,
  children: ["inline"],
  attributes: {
    className: { type: String },
  },
};
