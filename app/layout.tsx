import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./index.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Happy New Year",
  description: "Happy New Year Everyone",
  openGraph: {
    title: 'Happy New Year',
    description: 'Happy New Year Everyone',
    url: 'https://greetingsfrom.rickyadriell.com',
    siteName: 'Ricky Adriell',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-dvw h-dvh flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
