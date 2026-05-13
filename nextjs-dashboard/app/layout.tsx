"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { SessionProvider } from "next-auth/react";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <SessionProvider>{children}</SessionProvider>{" "}
        </Providers>
      </body>
    </html>
  );
}
