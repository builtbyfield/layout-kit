import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-16 items-center flex border-b border-gray-6 px-8">
      <div className="text-sm font-semibold">
        <Link href="/">
          <a>Tailwind CSS Layout</a>
        </Link>
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-end space-x-4">
          <li className="text-sm font-medium">
            <Link href="/docs">
              <a>Docs</a>
            </Link>
          </li>
          <li className="text-sm font-medium">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
