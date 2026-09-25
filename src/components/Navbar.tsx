'use client'
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { bookContext } from "@/context/booksContext";

const Navbar = () => {
  const { wishlist, savedList } = useContext(bookContext);

  return (
    <div className="navbar bg-black text-white px-6">
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            height={60}
            width={50}
            alt="Logo"
          />
          <h2 className="font-bold text-4xl">FITLOG</h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Workout</Link>
          </li>
          <li>
            <Link href="/books/listed-books">My Plan</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <Link href="/books/listed-books" className="flex items-center gap-2 bg-[#1a1d24] px-4 py-2 rounded-full hover:bg-gray-800 transition">
          <span className="text-sm font-semibold">Plan</span>
          <span className="bg-lime-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
            {wishlist?.length || 0}
          </span>
        </Link>

        <Link href="/books/listed-books" className="flex items-center gap-2 bg-[#1a1d24] px-4 py-2 rounded-full hover:bg-gray-800 transition">
          <span className="text-sm font-semibold">Saved</span>
          <span className="bg-[#2a2e39] text-gray-300 border border-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
            {savedList?.length || 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;