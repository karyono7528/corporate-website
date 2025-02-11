import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Corporate Energy Solutions",
  description: "Energizing the Future - Your Trusted Energy Partner",
  keywords: "energy, corporate, solutions, sustainability, innovation",
  authors: [{ name: "Corporate Energy Solutions" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const generateViewport = (): Viewport => {
  return {
    width: "device-width",
    initialScale: 1,
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        <div id="scroll-container" className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
