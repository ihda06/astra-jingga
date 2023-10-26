import "./globals.css";
import { Inter } from "next/font/google";

import ThemeProviderContext from "@/context/theme";
import Layouts from "@/commons/layouts";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Hi, I'm Ihda Anwari`,
  description: "This is my personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#4b95de"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
          zIndex={0}
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
