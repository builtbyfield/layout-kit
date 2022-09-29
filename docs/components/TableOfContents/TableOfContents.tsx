import Link from "next/link";
import type { Tag } from "@markdoc/markdoc";
import { join } from "tailwind-merge";

type Section = Tag["attributes"] & {
  title: string;
};

export type TableOfContentsProps = {
  toc: Section[];
};

export function TableOfContents({ toc }: TableOfContentsProps) {
  const items = toc
    ? toc.filter((item) => item.id && (item.level === 2 || item.level === 3))
    : [];

  if (items.length <= 1) {
    return null;
  }

  return (
    <aside
      className={join(
        "sticky",
        "top-0 pt-8 max-h-screen",
        "shrink-0 w-60",
        "self-start"
      )}
    >
      <nav className="px-6 pb-3 border-l border-gray-6 space-y-4">
        <span className="block text-xs tracking-wide uppercase text-gray-11">
          On this page
        </span>
        <ul className="flex flex-col space-y-3">
          {items.map((item) => {
            const href = `#${item.id}`;
            const active =
              typeof window !== "undefined" && window.location.hash === href;
            return (
              <li
                key={item.title}
                className={join(
                  "text-sm",
                  active ? "active" : undefined,
                  item.level === 3 ? "pl-4" : undefined
                )}
              >
                <Link href={href}>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
