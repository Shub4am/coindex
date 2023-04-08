import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-20 border-b-[1px] border-solid border-gray-600">
      <div className="flex justify-start items-center p-5 w-3/5 ">
        <p className="font-bold text-2xl leading-8 uppercase">cucoin</p>
      </div>

      <ul className="flex items-start p-0 gap-10">
        <li className="capitalize hover:text-pinkBtn">
          <Link href="">license</Link>
        </li>
        <li className="capitalize hover:text-pinkBtn">
          <Link href="">about us</Link>
        </li>
        <li className="capitalize hover:text-pinkBtn">
          <Link href="">how to start</Link>
        </li>
      </ul>

      <button className="flex justify-center items-center gap-[10px] rounded-[56px] bg-[#FFFFFF14] text-pinkBtn py-3 px-6 capitalize hover:bg-pinkBtn hover:text-white">
        join us
      </button>
    </div>
  );
};

export default Navbar;
