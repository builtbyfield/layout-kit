import Prism from "prismjs";
import { type ReactNode, useEffect, useRef } from "react";
import { join } from "tailwind-merge";

export type CodeBlockProps = {
  children: ReactNode;
  language: string;
};

export function CodeBlock({ children, language }: CodeBlockProps) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="first:mt-0 last:mb-0 my-3 relative" aria-live="polite">
      <pre
        ref={ref}
        className={join(
          "rounded border !p-3 border-gray-6 !text-sm",
          `language-${language}`
        )}
      >
        {children}
      </pre>
      <style jsx>
        {`
          /* Override Prism styles */
          div :global(pre[class*="language-"]) {
            text-shadow: none;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
}
