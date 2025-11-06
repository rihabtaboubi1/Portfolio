import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
// Force dynamic rendering for the whole app to avoid prerender-time access to
// browser globals (document/window) from third-party code during build.
export const dynamic = "force-dynamic";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rihab Taboubi - Portfolio",
  description: "Final-year Software Engineering student passionate about DevOps, Cloud, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
