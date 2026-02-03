import type { Metadata } from "next";
import { Inter, Quattrocento } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const quattrocento = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Arellano University",
  description: "Arellano University - Official Website",
};

export const viewport = {
  themeColor: "#004ea8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quattrocento.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
