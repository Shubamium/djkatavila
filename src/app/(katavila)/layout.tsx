import type { Metadata } from "next";
import { Chilanka, Caveat_Brush } from "next/font/google";
import "./globals.scss";
import Header from "./(components)/header/Header";
import { CSSProperties } from "react";
import { Footer } from "./(components)/footer/Footer";

export const revalidate = 5;
const chilanka = Chilanka({
  subsets: ["latin"],
  weight: ["400"],
});

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "DJ Kat Avila",
  description:
    "DJ Kat Avila is a music curator who believes every set should feel like a shared moment. In just a short time, she’s built a growing community that connects with her mixes, energy, and passion for music. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""}
        style={
          {
            "--fontcb": caveat.style.fontFamily,
            "--fontch": chilanka.style.fontFamily,
          } as CSSProperties
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
