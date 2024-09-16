import type { Metadata } from "next";
import "./globals.css";

import PrelineScript from "./PrelineScript";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Beach Cities Robotics",
  description: "FIRST Robotics Competition Team 294",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrelineScript />
      <body suppressHydrationWarning={true}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />        

        <Header />
        <div className="flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
