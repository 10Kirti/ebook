import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "@/components/Cards";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import SellBook from "@/components/SellBook";
import type { ReactNode } from "react";

export const metadata = {
  title: "My Website",
  description: "Built with Next.js 14",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Cards/>
        <Login/>
        <SignUp/>
        <SellBook/>
        <Footer />
        <main>{children}</main>
       
      </body>
    </html>
  );
}