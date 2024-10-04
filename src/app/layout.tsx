import type { Metadata } from "next";
import "./globals.css";

import PrelineScript from "./PrelineScript";
import Header from "./Header";
import Footer from "./Footer";

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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <Header />
        <div className="h-28" />
        <div className="flex justify-center items-start overflow-x-clip min-h-[calc(100vh-7rem)] max-w-[100vw]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
