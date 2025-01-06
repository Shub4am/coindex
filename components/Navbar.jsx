import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  const handleMobileNav = () => {
    setNavbar(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-xl flex justify-between items-center  z-40 border-b-[1px] border-solid border-gray-600 ease-in duration-300 bg-transparent backdrop-blur-xl drop-shadow-2xl">
      <div className="flex justify-start items-center p-5 w-2/4 ">
        <Link href="/" className="font-bold text-2xl leading-8 uppercase">
          cucoin
        </Link>
      </div>

      <ul className="hidden sm:flex items-start p-0 gap-10 ">
        <li className="capitalize hover:text-pinkBtn">
          <Link href="/#about">about us</Link>
        </li>
        <li className="capitalize hover:text-pinkBtn">
          <Link href="/#services">services</Link>
        </li>
        <li className="capitalize hover:text-pinkBtn">
          <Link href="/#footer">how to start</Link>
        </li>
      </ul>

      <button className="hidden sm:flex justify-center items-center rounded-[56px] text-white bg-pinkBtn hover:bg-[#f0edef] py-3 px-6 capitalize hover:text-pinkBtn mr-5 duration-200">
        join us
      </button>

      <div onClick={handleNavbar} className="block sm:hidden p-4 z-10">
        {navbar ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          navbar
            ? "sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            : "sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }
      >
        <ul
          className="text-sm font-bold 
      "
        >
          <li className="mx-7 py-4 text-4xl hover:text-pinkBtn">
            <Link href="/" onClick={handleMobileNav}>
              Home
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-pinkBtn">
            <Link href="/#about" onClick={handleMobileNav}>
              About Us
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-pinkBtn">
            <Link href="/#services" onClick={handleMobileNav}>
              Services
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-pinkBtn">
            <Link href="/#footer" onClick={handleMobileNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
