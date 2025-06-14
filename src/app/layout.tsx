import "./globals.css";
import Home from "@/Pages/Home";
import Details from "@/Pages/Details";
import ContactUs from "@/components/ContactUs";
import type { ReactNode } from "react";

export const metadata = {
  title: "My Website",
  description: "Built with Next.js 14",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Home/>
    
        <main>{children}</main>
       
      </body>
    </html>
  );
}