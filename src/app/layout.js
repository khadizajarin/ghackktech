import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { Cinzel_Decorative,Cinzel } from 'next/font/google'
import Hero from "@/components/Hero";
import Characters from "@/components/Characters";
import Carousel from "@/components/Carousel";


const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
})

export const metadata = {
  title: "Lore Olympus Landing Page",
  description: "Lore Olympus Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='anime'>
      <body
        className={`antialiased`}
      >
        <NavBar></NavBar>
        <Hero></Hero>
        {/* <Carousel></Carousel> */}
        <Characters></Characters>
        {children}
      </body>
    </html>
  );
}
