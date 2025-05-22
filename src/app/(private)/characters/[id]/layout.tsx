import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Grimoire",
  description: "A tabletop rpg campaign builder and manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-[inter] bg-black">{children}</body>
    </html>
  );
}