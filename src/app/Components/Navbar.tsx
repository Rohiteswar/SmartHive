"use client";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "./ui/Logo";
import Link from "next/link";
import Button from "./ui/Button";
import { RecoilRoot } from "recoil";

interface NavbarProps {
  nav: boolean; // Type for the 'nav' prop: boolean
  setNav: (newNavState: boolean) => void; // Type for the 'setNav' prop: function that takes a boolean
}

const Navbar: React.FC<NavbarProps> = ({ nav, setNav }) => {
  return (
    <RecoilRoot>
      <App nav={nav} setNav={setNav} />
    </RecoilRoot>
  );
};

function App({ nav, setNav }: NavbarProps) {
  const navItems = [
    { id: 1, text: "Home", route: "/" },
    { id: 2, text: "Services", route: "/services" },
    { id: 3, text: "Product", route: "/product" },
    { id: 4, text: "About Us", route: "/about_us" },
    { id: 5, text: "Contact Us", route: "/contact_us" },
  ];

  return (
    <div className="bg-transparent flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
      <a className="pr-1 flex items-center p-2" href="/">
        <Logo />
        <h1 className="text-base font-medium m-2 hidden md:block">SmartHive</h1>
      </a>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex place-items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 m-0.5 font-light cursor-pointer duration-300 hover:text-slate-400"
          >
            <Link href={item.route}>{item.text}</Link>
          </li>
        ))}
        <Button />
      </ul>
      {/* Mobile Navigation Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="block md:hidden place-items-center"
      >
        {nav ? (
          <AiOutlineClose size={20} className="m-4 hover:cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="m-4 hover:cursor-pointer" />
        )}
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 overflow-y-scroll"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] overflow-y-scroll"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#ffffff] m-4">
          <a href="/">SmartHive.</a>
        </h1>

        {/* Mobile Navigation Items */}

        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.route}
            className="p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600 flex"
          >
            {item.text}
          </Link>
        ))}
        <div className="flex justify-evenly items-center ml-4 mt-4">
          <button className="px-5 py-1 h-10  rounded-full bg-gradient-to-tr from-sky-500 to-green-500 text-white focus:ring-2 focus:ring-green-400 hover:shadow-xl transition duration-200 font-medium">
            SignUp
          </button>

          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 m-2">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Log In
            </span>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
