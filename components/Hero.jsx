import Image from 'next/image';
import React from 'react';
import HeroBg from '../assets/images/Ellipse1.png';
const Hero = () => {
  return (
    <div className="mt-[112px]">
      <div>
        <h1 className="font-semibold text-[80px] leading-[110px]  text-center .tracking-tighter capitalize">
          the world&apos;s fastest growing
          <br /> crypto community
        </h1>
        <h2 className="font-normal text-2xl leading-[34px] text-center text-[#FFFFFFCC] mt-[30px]">
          A highly-curated platform for creating, collecting and trading unique
          <br />
          NFTs. Trade with confidence on the world’s fastest and
          <br /> most secure crypto exchange
        </h2>
      </div>

      <div className="flex justify-center items-center mt-12">
        <div className="relative rounded-full w-[470px] border border-gray-300 px-4 py-3">
          <input
            type="text"
            placeholder="your email address"
            className="w-full bg-transparent outline-none"
          />
          <button className="absolute inset-y-0 right-0 flex justify-center items-center p-5 gap-[10px] bg-pinkBtn text-white rounded-full capitalize">
            join our community
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <Image src={HeroBg} alt="hero background" className="w-[1088.24px] " />
      </div>
    </div>
  );
};

export default Hero;
