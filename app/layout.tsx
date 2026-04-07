import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// I used fustad medium because it would match with medium of the ui.
const fustad = localFont({
  src: [
    {
      path: "../public/fonts/Fustat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-fustat",
});

// I used Nohemi-SemiBold becasue font-medium in the prototype title matches with medium variant for this font
const nohemi = localFont({
  src: [
    {
      path: "../public/fonts/Nohemi-SemiBold.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  title: "Vrit task",
  description: "Done by Bikesh Maharjan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${nohemi.variable} ${fustad.variable} antialiased`}
    >
      <body className="font-body">
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
