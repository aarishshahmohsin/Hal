/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react"; // Import useState
import Nav from "../nav";
import Footer from "../footer";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Signup() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Footer />
    </div>
  );
}
