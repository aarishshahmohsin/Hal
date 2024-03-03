/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";
import Footer from "./footer";
import { useLangStore } from "@/store/zustand";
import { translation_main_page } from "./translate";

export default function Home() {
  // @ts-ignore
  const { language } = useLangStore();
  useEffect(() => {}, [translation_main_page]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const translation_main = (text: string, lang: string | number) => {
    return translation_main_page(text, lang) || text;
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="pt-20 md:pt-24 lg:pt-32 pb-20 md:pb-20 lg:pb-20  px-4 md:px-6 bg-gray-100">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              {translation_main("Discover Hal", language)}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black">
              {translation_main(
                "Revolutionizing India's agriculture with technology, where innovation meets tradition. Elevate your farming with smart insights and sustainable solutions.",
                language
              )}
            </p>
            <button className="bg-[#4CAF4F] px-4 py-2 text-white rounded-lg">
              <Link href="#">
                {translation_main("KisanAi", language)}
              </Link>
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              alt={translation_main("Company Design Logo", language)}
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
                {translation_main("Key Features", language)}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                {translation_main(
                  "Discover the features that make our product stand out.",
                  language
                )}
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="flex space-x-8">
                <div className="flex items-center">
                  <Image
                    height="50"
                    width="50"
                    src="/artificial-intelligence.png"
                    alt={translation_main("Feature 1", language)}
                  />
                  <p className="ml-2 font-medium text-gray-900"></p>
                </div>
                <div className="flex items-center">
                  <Image
                    height="50"
                    width="50"
                    src="/communication.png"
                    alt={translation_main("Feature 2", language)}
                  />
                  <p className="ml-2 font-medium text-gray-900"></p>
                </div>
                <div className="flex items-center">
                  <Image
                    height="50"
                    width="50"
                    src="/marketplace.png"
                    alt={translation_main("Feature 3", language)}
                  />
                  <p className="ml-2 font-medium text-gray-900"></p>
                </div>
                <div className="flex items-center">
                  <Image
                    height="50"
                    width="50"
                    src="/play.png"
                    alt={translation_main("Feature 4", language)}
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
              <h3 className="text-xl font-semibold text-[#4CAF4F]">
                {translation_main("KisanAi", language)}
              </h3>
              <p className="text-gray-600">
                {translation_main(
                  "Leverage AI to improve crop yields and reduce costs through predictive analysis and smart recommendations.",
                  language
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/artificial-intelligence.png"
                alt={translation_main("KisanAi", language)}
                height="100"
                width="100"
              />
            </div>
          </div>
          {/* Forum */}
          <div className="flex flex-wrap items-center justify-between mb-12 flex-row-reverse">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#4CAF4F]">
                {translation_main("Forum", language)}
              </h3>
              <p className="text-gray-600">
                {translation_main(
                  "Connect with a community of farmers and experts to share knowledge and experiences.",
                  language
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/communication.png"
                alt={translation_main("Forum", language)}
                height="100"
                width="100"
              />
            </div>
          </div>
          {/* Marketplace */}
          <div className="flex flex-wrap items-center justify-between mb-12">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#4CAF4F]">
                {translation_main("Marketplace", language)}
              </h3>
              <p className="text-gray-600">
                {translation_main(
                  "Explore our digital marketplace to buy and sell produce directly, ensuring fair prices and greater reach.",
                  language
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/marketplace.png"
                alt={translation_main("Marketplace", language)}
                height="100"
                width="100"
              />
            </div>
          </div>
          {/* Videos */}
          <div className="flex flex-wrap items-center justify-between mb-12 flex-row-reverse">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#4CAF4F]">
                {translation_main("Videos", language)}
              </h3>
              <p className="text-gray-600">
                {translation_main(
                  "Access a wide range of instructional videos to learn new techniques and stay updated on the latest in agriculture.",
                  language
                )}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/play.png"
                alt={translation_main("Videos", language)}
                height="100"
                width="100"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

