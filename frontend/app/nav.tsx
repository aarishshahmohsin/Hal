/* eslint-disable react/no-unescaped-entities */
// "use client";
import { useEffect, useState } from "react"; // Import useState
import Image from "next/image";
import Link from "next/link";
import { useLangStore } from "@/store/zustand";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { translation } from "./translate";

const options = ["en", "hi", "bn", "mr", "ur", "gu", "kn", "pa", "ml"];

export default function Nav(this: any) {
  // @ts-ignore
  const { setLanguage, language } = useLangStore(); // Get the setLanguage function from the store
  // useEffect(() => {}, [translation]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const changeLang = (e: any) => {
    setLanguage(e.value);
    setLang(e.value);
    console.log(e.value);
  };

  const [lang, setLang] = useState(language);

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
          {translation("Home", lang)}
          {/* Home */}
        </Link>
        <Link
          href="/forum"
          className="text-sm font-medium hover:text-gray-600 block py-2"
        >
          {translation("Forum", lang)}
        </Link>
        <Link
          href="/marketplace"
          className="text-sm font-medium hover:text-gray-600 block py-2"
        >
          {translation("Marketplace", lang)}
        </Link>
        <Link
          href="/videos"
          className="text-sm font-medium hover:text-gray-600 block py-2"
        >
          {translation("Videos", lang)}
        </Link>
        <button className="bg-[#4CAF4F] text-white px-2 py-1 rounded-md mt-2 md:mt-0 hover:bg-green-800">
          <Link href="/signup" className="text-sm font-medium">
            {translation("KisanAi", lang)}
          </Link>
        </button>
        <Dropdown
          options={options}
          onChange={(selected) => {
            setLang(selected.value);
            setLanguage(selected.value);
            console.log(language);
          }}
          value={language}
          placeholder="Select a Language"
        />
      </nav>
    </header>
  );
}
