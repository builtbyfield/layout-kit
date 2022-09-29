import type { MarkdocNextJsSchema } from "@markdoc/next.js";
import { type CSSProperties, type ReactNode } from "react";

const gridBackground =
  "repeating-linear-gradient(90deg, var(--column-bg), var(--column-bg) calc((100% - (((var(--columns) - 1) * var(--gutters)))) / var(--columns)),rgba(0,0,0,0) calc((100% - (((var(--columns) - 1) * var(--gutters)))) / var(--columns)), rgba(0,0,0,0) calc((100% - (((var(--columns) - 1) * var(--gutters)))) / var(--columns) + var(--gutters)))";

type GridProps = { children: ReactNode };

const Grid = ({ children }: GridProps) => {
  return (
    <div className="first:mt-0 last:mb-0 my-3">
      <div className="container rounded border border-gray-6">
        <div className="relative py-6">
          <div className="space-y-3">{children}</div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={
              {
                "--column-bg": "rgba(var(--colors-red-9), 0.1)",
                background: gridBackground,
              } as CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
};

export const grid: MarkdocNextJsSchema = {
  render: Grid,
  children: ["tag"],
};
