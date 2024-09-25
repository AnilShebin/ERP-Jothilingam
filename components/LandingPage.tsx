"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <header className="flex justify-between items-center p-6 bg-opacity-50 backdrop-blur-lg">
      <Link href="/" className="mb-6 cursor-pointor flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Jothilingam logo"
            className="size-[34px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Jothilingam</h1>
        </Link>
        <div className="text-2xl font-bold">ERP Application</div>
        <button
          onClick={handleLoginClick}
          className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-100"
        >
          Login
        </button>
      </header>
      <main className="flex flex-1 flex-col justify-center items-center text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Innovative Solutions for Your Business</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
        Providing expert accounting, audit, and financial services to help
        you navigate your business finances efficiently.
        </p>
        <button
          onClick={handleLoginClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all"
        >
          Get Started
        </button>
      </main>
      <footer className="p-6 text-center text-sm">
        <p>© 2024 Jothilingam CA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
