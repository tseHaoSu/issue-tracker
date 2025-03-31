import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import "./theme-config.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//customize font
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme
          accentColor="cyan"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
        >
          <NavBar />
          <main className="p-5">{children}</main>
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
