import React from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const handleJoinUs = () => {
    router.push("/success");
  };

  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 blur-[2px]"
        src="/blackhole.webm"
      >
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-white text-center">
        <h1 className="font-semibold text-5xl sm:text-[80px] leading-[110px] tracking-tight capitalize">
          the world&apos;s fastest growing
          <br />
          <span className="uppercase bg-gradient-to-r from-[#1d93d8] to-[#ff00cc] text-transparent bg-clip-text ">
            crypto
          </span>{" "}
          community
        </h1>
        <h2 className="font-normal text-base px-10 sm:px-0 sm:text-2xl leading-[34px] mt-[30px] text-white">
          A highly-curated platform for creating, collecting and trading unique
          <br />
          NFTs. Trade with confidence on the world&apos;s fastest and
          <br /> most secure crypto exchange
        </h2>

        <div className="flex justify-center items-center mt-12">
          <div className="relative rounded-full w-[270px] sm:w-[470px] border border-gray-300 px-4 py-3">
            <input
              type="text"
              placeholder="your email address"
              className="w-full bg-transparent outline-none"
            />
            <button
              onClick={handleJoinUs}
              className="hidden sm:absolute inset-y-0 right-0 sm:flex justify-center items-center p-5 gap-[10px] bg-pinkBtn hover:bg-[#f0edef] text-white hover:text-pinkBtn duration-200 rounded-full capitalize mb-1 mt-1 mr-1"
            >
              join us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
