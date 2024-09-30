// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created Using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>

      </body>
    </html>
  );
}


