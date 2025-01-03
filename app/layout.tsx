import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";

export const metadata: Metadata = {
  title: "LunaChime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
