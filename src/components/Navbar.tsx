import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <Image
          src={logo}
          height={40}
          width={30}
          alt="Logo"
        />
        <h2 className="font-bold text-4xl">FITLOG</h2>
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

      <div className="navbar-end rounded-4xl gap-2.5">
        <Link href="/books/listed-books" className="btn btn-success">Plan</Link>
        <Link href="/books/listed-books" className="btn btn-success">Saved</Link>
      </div>
    </div>
  );
};

export default Navbar;