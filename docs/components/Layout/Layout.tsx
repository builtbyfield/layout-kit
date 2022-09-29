import type { RenderableTreeNodes } from "@markdoc/markdoc";
import { NextSeo } from "next-seo";
import { type ReactNode } from "react";

import { SideNav, Header, Footer, TableOfContents } from "../../components";
import { collectHeadings } from "../../utils";

export type LayoutProps = {
  children: ReactNode;
  content?: RenderableTreeNodes;
  frontmatter?: Record<string, any>;
};

export const Layout = ({ children, frontmatter, content }: LayoutProps) => {
  const toc = content ? collectHeadings(content) : [];

  return (
    <>
      <NextSeo
        title={frontmatter?.title}
        titleTemplate="Tailwind CSS Layout | %s"
        description={frontmatter?.description}
      />
      <a href="#skip-nav" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Header />
      <main className="flex flex-grow min-h-screen max-w-[100vw]">
        <SideNav />
        <article className="container flex-grow pt-16 pb-16 min-w-0">
          <div id="skip-nav" />
          {children}
        </article>
        <TableOfContents toc={toc} />
      </main>
      <Footer />
    </>
  );
};
