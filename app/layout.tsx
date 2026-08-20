import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: {
    default: "Spanish Learning OS",
    template: "%s | Spanish Learning OS"
  },
  applicationName: "Spanish OS",
  description: "A Mexico-first Spanish learning app for Chinese-speaking adults.",
  manifest: withBasePath("/manifest.webmanifest"),
  icons: {
    icon: withBasePath("/icon.svg"),
    apple: withBasePath("/icon.svg")
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Spanish OS"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f4ed"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
