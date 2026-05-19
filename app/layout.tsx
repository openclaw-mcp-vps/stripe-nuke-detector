import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Nuke Detector — Early Warning for Payment Account Risks",
  description:
    "Monitor your Stripe account health, detect dispute patterns, and get real-time alerts before your account gets suspended."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="8f73380a-5ec2-41a8-95f6-9422ca04542e"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
