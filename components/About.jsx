import Image from 'next/image';
import React from 'react';
import scaleImg from '../assets/images/scales.png';

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center w-full mt-20"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className=" font-bold text-xl sm:text-5xl leading-[60px] capitalize">
          Our goal and mission
        </h2>
        <p className="font-normal text-base sm:text-2xl leading-[34px] text-center mt-6">
          Whether you&apos;re an experienced trader or just getting started,
          Cucoin has all the tools you need. Execute
          <br /> your trading strategies with the professional level crypto
          trading platform.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <Image
          src={scaleImg}
          alt="scale image"
          className="w-[160px] h-[160px] sm:w-[383px] sm:h-[300px] ml-10 mt-10 sm:mt-0 animate-pulse"
        />
        <div className="flex-col justify-center items-center mt-10">
          <div className="border-l-4 border-solid border-rose-400  hover:border-red-500 border-opacity-60 transform -rotate-90.48 px-5 ml-10">
            <p className="font-normal text-sm sm:text-lg leading-[25px] mb-12">
              An accessible way to buy, sell, and store non-fungible
              <br /> tokens (NFTs) - digital art on the blockchain. You can
              <br />
              expect the same industry-leading security technology.
            </p>
          </div>
          <div className="border-l-4 border-solid border-rose-400 hover:border-red-500 border-opacity-60 transform -rotate-90.48 px-5 ml-10">
            <p className="font-normal  text-sm sm:text-lg leading-[25px] mb-12">
              The project aims to build increasing connectivity to
              <br /> Ethereum and the wider blockchain ecosystem. AVAX,
              <br />
              Avalanche&apos;s native token, is the network&apos;s unit of your
              personal account.
            </p>
          </div>
          <div className="border-l-4 border-solid border-white  transform -rotate-90.48 px-5   ml-10">
            <p className="font-bold  text-sm sm:text-lg leading-[25px] mb-12">
              High performance tools for active traders and
              <br /> industry-leading security from day one.
            </p>
          </div>
          <div className="flex justify-center items-center sm:justify-start">
            <button className=" px-6 py-4 bg-pinkBtn  hover:bg-pink-500 rounded-full font-semibold text-base sm:ml-20 mb-4 ">
              Join our community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
