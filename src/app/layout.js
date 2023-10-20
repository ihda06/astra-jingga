import "./globals.css";
import { Inter } from "next/font/google";

import ThemeProviderContext from "@/context/theme";
import Layouts from "@/commons/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Hi, I'm Ihda Anwari`,
  description: "This is my personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
