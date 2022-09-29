import type { MarkdocNextJsSchema } from "@markdoc/next.js";
import { type ReactNode } from "react";
import { join } from "tailwind-merge";

type ColumnProps = {
  children?: ReactNode;
  color: string;
  width: string;
};

const Column = ({ children, color, width }: ColumnProps) => {
  return (
    <div className={join("min-h-[3rem] text-xs", color, width)}>
      {children ? (
        <div>{children}</div>
      ) : (
        <div className="whitespace-nowrap">{width}</div>
      )}
    </div>
  );
};

export const column: MarkdocNextJsSchema = {
  render: Column,
  children: ["tag"],
  attributes: {
    width: {
      type: String,
    },
    color: {
      type: String,
      default: "bg-blue-9/20",
    },
  },
};
