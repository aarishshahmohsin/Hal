/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react"; // Import useState
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full h-16 bg-white flex items-center justify-between px-4 md:px-6 z-10">
        <Link href="#" className="flex items-center space-x-2">
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
            href="#"
            className="text-sm font-medium hover:text-gray-600 block py-2"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-gray-600 block py-2"
          >
            KisanAi
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-gray-600 block py-2"
          >
            Posts
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-gray-600 block py-2"
          >
            Marketplace
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-gray-600 block py-2"
          >
            Videos
          </Link>
          <button className="bg-[#4CAF4F] text-white px-2 py-1 rounded-md mt-2 md:mt-0 hover:bg-green-800">
            <Link href="#" className="text-sm font-medium">
              Sign Up
            </Link>
          </button>
        </nav>
      </header>
      <main className="pt-20 md:pt-24 lg:pt-32 pb-20 md:pb-20 lg:pb-20  px-4 md:px-6 bg-gray-100">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Discover Hal
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black">
              Revolutionizing India's
              <span className="text-[#4CAF4F]"> agriculture</span> with Hal,
              where <span className="text-[#4CAF4F]">innovation</span> meets
              tradition. Elevate your farming with smart insights and{" "}
              <span className="text-[#4CAF4F]"> sustainable </span>
              solutions.
            </p>
            <button className="bg-[#4CAF4F] px-4 py-2 text-white rounded-lg">
              <Link href="#">KisanAi</Link>
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Company Design Logo"
              height="400"
              src="/farmer.webp"
              width="400"
            />
          </div>
        </section>
      </main>
      <main className="pt-12 md:pt-16 pb-20 md:pb-24 lg:pb-32 lg:pt-24 px-4 md:px-6 bg-white">
        <section className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Key Features
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Discover the features that make our product stand out.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="flex space-x-8">
                <div className="flex items-center">
                  <Image
                    height="50"
                    width="50"
                    src="/artificial-intelligence.png"
                    alt="Feature 1"
                  />
                  <p className="ml-2 font-medium text-gray-900"></p>
                </div>
                <div className="flex items-center">
                  <Image
                    height="50"
                    width="50"
                    src="/communication.png"
                    alt="Feature 2"
                  />
                  <p className="ml-2 font-medium text-gray-900"></p>
                </div>
                <div className="flex items-center">
                  <Image
                    height="50"
                    width="50"
                    src="/marketplace.png"
                    alt="Feature 3"
                  />
                  <p className="ml-2 font-medium text-gray-900"></p>
                </div>
                <div className="flex items-center">
                  <Image
                    height="50"
                    width="50"
                    src="/play.png"
                    alt="Feature 3"
                  />
                  <p className="ml-2 font-medium text-gray-900"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <main className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* KisanAi */}
          <div className="flex flex-wrap items-center justify-between mb-12">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#4CAF4F]">KisanAi</h3>
              <p className="text-gray-600">
                Leverage AI to improve crop yields and reduce costs through
                predictive analysis and smart recommendations.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/artificial-intelligence.png"
                alt="KisanAi"
                height="100"
                width="100"
              />
            </div>
          </div>
          {/* Forum */}
          <div className="flex flex-wrap items-center justify-between mb-12 flex-row-reverse">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#4CAF4F]">Forum</h3>
              <p className="text-gray-600">
                Connect with a community of farmers and experts to share
                knowledge and experiences.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/communication.png"
                alt="Forum"
                height="100"
                width="100"
              />
            </div>
          </div>
          {/* Marketplace */}
          <div className="flex flex-wrap items-center justify-between mb-12">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#4CAF4F]">
                Marketplace
              </h3>
              <p className="text-gray-600">
                Explore our digital marketplace to buy and sell produce
                directly, ensuring fair prices and greater reach.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/marketplace.png"
                alt="Marketplace"
                height="100"
                width="100"
              />
            </div>
          </div>
          {/* Videos */}
          <div className="flex flex-wrap items-center justify-between mb-12 flex-row-reverse">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#4CAF4F]">Videos</h3>
              <p className="text-gray-600">
                Access a wide range of instructional videos to learn new
                techniques and stay updated on the latest in agriculture.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image src="/play.png" alt="Videos" height="100" width="100" />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white mt-12 text-black">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <Link href="#" className="flex items-center">
                <Image alt="Hal logo" src="/Hal.png" width="80" height="80" />
                <span className="text-xl font-semibold ml-3"></span>
              </Link>
              <p className="mt-2 mx-2 text-sm text-gray-500">
                Revolutionizing agriculture with technology.
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    KisanAi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Videos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-2">
                <li>
                  <span className="text-sm text-gray-600">
                    Email: hal@gmail.com
                  </span>
                </li>
                <li>
                  <span className="text-sm text-gray-600">
                    Phone: +123 456 7890
                  </span>
                </li>
                <li>
                  <span className="text-sm text-gray-600">
                    Address: ZHCET, AMU
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex mt-2">
                {/* Icons or text links to social media here */}
                <Link
                  href="#"
                  className="mr-3 text-gray-600 hover:text-gray-900"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-gray-600 hover:text-gray-900"
                  />
                </Link>
                <Link
                  href="#"
                  className="mr-3 text-gray-600 hover:text-gray-900"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-gray-600 hover:text-gray-900"
                  />
                </Link>
                <Link
                  href="#"
                  className="mr-3 text-gray-600 hover:text-gray-900"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-gray-600 hover:text-gray-900"
                  />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-600 hover:text-gray-900"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-4">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Hal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
