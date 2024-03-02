/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react"; // Import useState
import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="fixed top-0 w-full h-16 bg-white flex items-center justify-between px-4 md:px-6 z-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image alt="hal logo" height="60" width="60" src="/Hal.png" />
        <span className="sr-only">Hal Logo</span>
      </Link>
      <div className="md:hidden">
        <button onClick={toggleNav} className="text-black focus:outline-none">
          {/* Icon for the menu button */}
          <span>{isNavOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
      <nav
        className={`flex-col md:flex-row flex items-center md:space-x-6 text-black absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Navigation links */}
        <Link
          href="/"
          className="text-sm font-medium hover:text-gray-600 block py-2"
        >
          Home
        </Link>
        <Link
          href="/kisanai"
          className="text-sm font-medium hover:text-gray-600 block py-2"
        >
          KisanAi
        </Link>
        <Link
          href="/forum"
          className="text-sm font-medium hover:text-gray-600 block py-2"
        >
          Forum
        </Link>
        <Link
          href="/marketplace"
          className="text-sm font-medium hover:text-gray-600 block py-2"
        >
          Marketplace
        </Link>
        <Link
          href="/videos"
          className="text-sm font-medium hover:text-gray-600 block py-2"
        >
          Videos
        </Link>
        <button className="bg-[#4CAF4F] text-white px-2 py-1 rounded-md mt-2 md:mt-0 hover:bg-green-800">
          <Link href="/signup" className="text-sm font-medium">
            Sign Up
          </Link>
        </button>
      </nav>
    </header>
  );
}
