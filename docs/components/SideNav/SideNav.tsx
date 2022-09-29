import Link from "next/link";
import { useRouter } from "next/router";
import { join } from "tailwind-merge";

const items = [
  {
    title: "Get started",
    links: [
      { href: "/docs", children: "Overview" },
      { href: "/docs/installation", children: "Installation" },
      { href: "/docs/browser-support", children: "Browser Support" },
      { href: "/docs/faq", children: "FAQ" },
    ],
  },
  {
    title: "Customization",
    links: [
      { href: "/docs/configuration", children: "Configuration" },
      { href: "/docs/container", children: "Container" },
      { href: "/docs/margins", children: "Margins" },
      { href: "/docs/columns", children: "Columns" },
      { href: "/docs/gutters", children: "Gutters" },
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 w-60 shrink-0 h-screen overflow-y-auto pt-8 pl-8">
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.title} className="space-y-1.5">
            <h3 className="text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <ul className="space-y-1.5">
              {item.links.map((link) => {
                const active = router.pathname === link.href;
                return (
                  <li
                    key={link.href}
                    className={join("text-sm pl-3", active ? "active" : "")}
                  >
                    <Link {...link}>
                      <a href={link.href}>{link.children}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
