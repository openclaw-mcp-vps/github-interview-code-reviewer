import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Interview Code Reviewer",
  description: "Review candidate code submissions like a senior engineer. AI-powered technical analysis for smarter hiring decisions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="328e5d4d-2d8e-44ea-960c-e31cf5e66761"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
