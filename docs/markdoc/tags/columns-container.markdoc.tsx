import { type ReactNode } from "react";
import type { MarkdocNextJsSchema } from "@markdoc/next.js";

type ColumnsContainerProps = {
  children: ReactNode;
};

const ColumnsContainer = ({ children }: ColumnsContainerProps) => {
  return (
    <div className="cols-container before:table [&>*]:mt-0">{children}</div>
  );
};

export const columnsContainer: MarkdocNextJsSchema = {
  render: ColumnsContainer,
  children: ["tag"],
};
