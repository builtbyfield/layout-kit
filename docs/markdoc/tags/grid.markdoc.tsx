import type { MarkdocNextJsSchema } from "@markdoc/next.js";
import { useState, type CSSProperties, type ReactNode } from "react";
import { join } from "tailwind-merge";

import { Switch } from "../../components";

const gridBackground =
  "repeating-linear-gradient(90deg, var(--column-bg), var(--column-bg) calc((100% - (((var(--columns) - 1) * var(--gutters)))) / var(--columns)),rgba(0,0,0,0) calc((100% - (((var(--columns) - 1) * var(--gutters)))) / var(--columns)), rgba(0,0,0,0) calc((100% - (((var(--columns) - 1) * var(--gutters)))) / var(--columns) + var(--gutters)))";

type GridProps = { children: ReactNode };

const Grid = ({ children }: GridProps) => {
  const [showColumns, setShowColumns] = useState(true);
  const [showMargins, setShowMargins] = useState(true);

  const toggleColumns = () => setShowColumns(!showColumns);
  const toggleMargins = () => setShowMargins(!showMargins);

  return (
    <div className="first:mt-0 last:mb-0 my-3">
      <div className="rounded-lg bg-gray-1 shadow-md overflow-hidden border border-gray-6">
        <header className="flex items-center border-b border-gray-5 px-2 h-8">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-5" />
            <div className="w-3 h-3 rounded-full bg-gray-5" />
            <div className="w-3 h-3 rounded-full bg-gray-5" />
          </div>
        </header>
        <main className="relative container">
          <div className="relative py-6">
            <div className="space-y-3">{children}</div>
            <div
              className={join(
                "absolute inset-0 pointer-events-none",
                !showColumns && "opacity-0"
              )}
              style={
                {
                  "--column-bg": "rgba(var(--colors-red-9), 0.1)",
                  background: gridBackground,
                } as CSSProperties
              }
            />
            <div
              className={join(
                "absolute inset-0 pointer-events-none",
                "before:absolute before:inset-y-0 before:left-0 before:-translate-x-full before:w-[var(--margins)] before:bg-[color:var(--margin-bg)]",
                "after:absolute after:inset-y-0 after:right-0 after:translate-x-full after:w-[var(--margins)] after:bg-[color:var(--margin-bg)]",
                !showMargins && "opacity-0"
              )}
              style={
                {
                  "--margin-bg": "rgba(var(--colors-yellow-9), 0.1)",
                } as CSSProperties
              }
            />
          </div>
        </main>
        <footer className="flex sm:flex-row flex-col space-x-0 sm:items-center border-t border-gray-5 px-3 sm:px-4 sm:py-3 py-2 space-y-1.5 sm:space-y-0 sm:space-x-3">
          <div className="text-xs font-sans text-gray-11 after:content-[var(--breakpoint)] after:font-mono after:text-gray-10 after:rounded after:ring-1 after:ring-gray-4 after:bg-gray-3 after:px-[0.3em] after:py-[0.1em] after:text-[0.9em]">
            Current breakpoint:{" "}
          </div>
          <div className="flex sm:justify-end items-center flex-1">
            <Switch
              className="text-xs text-gray-11"
              defaultChecked={showColumns}
              onCheckedChange={toggleColumns}
            >
              Columns
            </Switch>
            <span className="block h-3.5 bg-gray-6 mx-3 w-px" />
            <Switch
              className="text-xs text-gray-11"
              defaultChecked={showMargins}
              onCheckedChange={toggleMargins}
            >
              Margins
            </Switch>
          </div>
        </footer>
      </div>
    </div>
  );
};

export const grid: MarkdocNextJsSchema = {
  render: Grid,
  children: ["tag"],
};
