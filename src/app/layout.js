import Head from "next/head";
import {Quicksand} from "next/font/google";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
  style: "normal",
});

import Header from "./Components/Header/Header";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 md:mx-[20%] ${quicksand.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}