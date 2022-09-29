import { type ReactNode } from "react";
import { join } from "tailwind-merge";

type CodeProps = {
  content: string;
  className: string;
};

function InlineCode({ content, className }: CodeProps) {
  return (
    <code
      className={join(
        "text-gray-11 bg-gray-3 ring-1 font-medium ring-gray-6 text-[0.9em] px-[0.25em] font-mono py-[0.075em] rounded",
        className
      )}
    >
      {content}
    </code>
  );
}

export const code = {
  render: InlineCode,
  attributes: {
    content: { type: String },
    className: { type: String },
  },
};
