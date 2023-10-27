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
        <link rel="icon" href="/favicon2.ico" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#E9DAC1"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #E9DAC1,0 0 5px #E9DAC1"
          zIndex={200}
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
