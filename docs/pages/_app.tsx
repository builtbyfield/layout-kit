import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "prismjs";
import "prismjs/components/prism-bash.min";
import "prismjs/components/prism-javascript.min";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-typescript.min";
import "prismjs/themes/prism.css";
import "../styles/global.css";

import type { MarkdocNextJsPageProps } from "@markdoc/next.js";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { Layout } from "../components";

type PageProps = MarkdocNextJsPageProps;

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <ThemeProvider
      attribute="class"
      value={{ dark: "theme-dark", light: "theme-light" }}
    >
      <Layout
        frontmatter={pageProps.markdoc?.frontmatter}
        content={pageProps.markdoc?.content}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
