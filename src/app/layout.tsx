"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar_use from "./Components/Navbar";
import { navstate } from "@/store/store";
import { useRecoilState, RecoilRoot } from "recoil";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "SmartHive",
  description:
    "Home Automation Company moreover a perfect Marketplace for IOT Products",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <App>{children}</App>
    </RecoilRoot>
  );
}

function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nav, setNav] = useRecoilState(navstate);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {/* Mobile navigation button (unchanged) */}
          <div className="bg-gradient-radial from-transparent to-black">
            <Navbar_use nav={nav} setNav={handleNav} />
          </div>

          <main
            className={`page transition-opacity duration-300 ease-in-out ${
              nav ? "hidden" : ""
            } `}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
