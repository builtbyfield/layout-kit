import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-16 items-center flex border-b border-gray-6 px-8">
      <div className="flex items-center">
        <Link href="/">
          <a className="text-sm font-sans font-semibold text-gray-12">
            Tailwind CSS Layout
          </a>
        </Link>
        <span className="block h-3.5 bg-gray-6 mx-3 w-px" />
        <span className="text-sm font-sans font-medium text-gray-11">
          Documentation
        </span>
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-end space-x-4">
          <li className="text-sm font-medium">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="https://builtbyfield.com/"
              target="_blank"
              rel="noreferrer"
            >
              Built by Field
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
