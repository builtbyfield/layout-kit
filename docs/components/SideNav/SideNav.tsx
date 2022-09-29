import Link from "next/link";
import { useRouter } from "next/router";
import { join } from "tailwind-merge";

const items = [
  {
    title: "Get started",
    links: [
      { href: "/", children: "Overview" },
      { href: "/installation", children: "Installation" },
      { href: "/browser-support", children: "Browser Support" },
      { href: "/faq", children: "FAQ" },
    ],
  },
  {
    title: "Customization",
    links: [
      { href: "/configuration", children: "Configuration" },
      { href: "/container", children: "Container" },
      { href: "/margins", children: "Margins" },
      { href: "/columns", children: "Columns" },
      { href: "/gutters", children: "Gutters" },
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sticky hidden lg:block top-0 w-60 shrink-0 h-screen overflow-y-auto pt-6 border-r border-gray-6 pl-8">
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.title} className="space-y-1.5">
            <h3 className="text-md font-sans font-semibold tracking-tight">
              {item.title}
            </h3>
            <ul className="space-y-1.5">
              {item.links.map((link) => {
                const active = router.pathname === link.href;
                return (
                  <li
                    key={link.href}
                    className={join(
                      "text-sm font-medium pl-3",
                      active ? "text-blue-11" : "text-gray-11"
                    )}
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
