/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useLangStore } from "@/store/zustand";
import { translation } from "./translate";
import { useEffect } from "react";

export default function Footer() {
  // @ts-ignore
  const { language } = useLangStore();
  useEffect(() => {}, [translation]);
  return (
    <footer className="bg-white mt-12 text-black">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link href="#" className="flex items-center">
              <Image alt="Hal logo" src="/Hal.png" width="80" height="80" />
              <span className="text-xl font-semibold ml-3"></span>
            </Link>
            <p className="mt-2 mx-2 mr-4 text-sm text-gray-500">
              {translation(
                "Revolutionizing agriculture with technology",
                language
              )}
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">
              {translation("Quick Links", language)}
            </h3>
            <ul className="mt-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {translation("Home", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="/kisanai"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {translation("KisanAi", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="marketplace"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {translation("Marketplace", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="videos"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {translation("Videos", language)}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">
              {translation("Contact Us", language)}
            </h3>
            <ul className="mt-2">
              <li>
                <Link
                  href="https://github.com/aarishshahmohsin"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  @aarish
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/tayyab-ilyas"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  @tayyab
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">
              {translation("Follow Us", language)}
            </h3>
            <div className="flex mt-2">
              <Link href="#" className="mr-3 text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-gray-600 hover:text-gray-900"
                />
              </Link>
              <Link href="#" className="mr-3 text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-gray-600 hover:text-gray-900"
                />
              </Link>
              <Link href="#" className="mr-3 text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-gray-600 hover:text-gray-900"
                />
              </Link>
              <Link
                href="https://github.com/aarishshahmohsin/Hal"
                className="text-gray-600 hover:text-gray-900"
              >
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
            © {new Date().getFullYear()}{" "}
            {translation("Hal. All rights reserved", language)};
          </p>
        </div>
      </div>
    </footer>
  );
}
