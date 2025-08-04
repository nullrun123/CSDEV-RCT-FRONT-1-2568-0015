import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterPage from "../component/footer";
import localFont from 'next/font/local'
import Header from "./Header/page";
import Star from "@/component/star";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "PineApple",
  description: "PineApple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`section ${geistSans.variable} ${geistMono.variable}`}>
        
        <Header/>
        {children}
        <FooterPage/>
      </body>
    </html>
  );
}
