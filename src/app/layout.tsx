// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: "Zainab Siddiqui",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> {/* It's good practice to set the language attribute */}
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Zainab Siddiqui</title>
      </head>
      <body>
        <Navbar />
        
          {children} {/* Render the main content */}
        
      </body>
    </html>
  );
}
