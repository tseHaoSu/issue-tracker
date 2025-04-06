import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import "./theme-config.css";
import AuthProvider from "./components/AuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//customize font
const inter = Inter({
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <AuthProvider>
          <Theme
            accentColor="cyan"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
          >
            <NavBar />
            <main className="p-5">{children}</main>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
