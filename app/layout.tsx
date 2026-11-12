import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fanny — Blade of Kibou",
  description: "Aspirants character showcase for Fanny.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
