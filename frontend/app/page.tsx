import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full h-16 bg-white flex items-center justify-between px-4 md:px-6">
        <Link className="text-sm font-medium hover:underline" href="#">
          <Image alt="hal logo" height="60" width="60" src="/Hal.png" />
          <span className="sr-only">Hal Logo</span>
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-6 text-black">
          <Link className="text-sm font-medium hover:underline" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            KisanAi
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Posts
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Videos
          </Link>
          <button className="bg-[#4CAF4F] text-white px-2 py-1 rounded-md">
            <Link className="text-sm font-medium hover:underline" href="#">
              Sign Up
            </Link>
          </button>
        </nav>
      </header>
      <main className="pt-20 md:pt-24 lg:pt-32 px-4 md:px-6 bg-gray-100">
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
    </div>
  );
}
