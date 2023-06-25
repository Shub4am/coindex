import React from 'react';
import Image from 'next/image';
import instaIcon from '../assets/icons/insta.png';
import twitterIcon from '../assets/icons/twitter.png';
import telegramIcon from '../assets/icons/telegram.png';
import facebookIcon from '../assets/icons/facebook.png';

import gpsIcon from '../assets/icons/gps.png';
import callIcon from '../assets/icons/contact.png';
import mailIcon from '../assets/icons/mail.png';

import coingeckoImage from '../assets/images/coingecko.png';

const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="sm:flex justify-center items-center gap-10 p-5"
      >
        <div className="relative flex flex-col justify-center items-center sm:items-start sm:ml-40">
          <div className="flex gap-6 mb-12">
            <Image src={instaIcon} alt="icons" />
            <Image src={twitterIcon} alt="icons" />
            <Image src={telegramIcon} alt="icons" />
            <Image src={facebookIcon} alt="icons" />
          </div>

          <p className="font-normal text-lg  sm:text-2xl leading-[34px] mb-10">
            “The one who owns the information — <br />
            owns the world!”
          </p>

          <div className="flex gap-5 mb-8">
            <Image src={gpsIcon} alt="icons" className="w-4 h-5" />
            <p className="font-bold text-base leading-5">
              Los Angeles, Lamen St. 45, 23-000
            </p>
          </div>

          <div className="flex gap-5 mb-8">
            <Image src={callIcon} alt="icons" className="w-4 h-4" />
            <p className="font-bold text-base leading-5">+1-123-456-7890</p>
          </div>

          <div className="flex gap-5 mb-8">
            <Image src={mailIcon} alt="icons" className="w-5 h-4" />
            <p className="font-bold text-base leading-5">cucoin@crypto.com</p>
          </div>
        </div>

        <div className="flex justify-center items-center sm:ml-40">
          <form>
            <p className="font-bold text-2xl sm:text-5xl leading-[60px] text-center">
              Join our Community
            </p>
            <div className="flex flex-col gap-5 mt-5 ">
              <div className="flex gap-10">
                <label>
                  <input
                    name="firstName"
                    type="text"
                    maxLength="20"
                    placeholder="First Name"
                    className="w-40 bg-transparent font-normal text-xl leading-[25px]  text-white capitalize border-b-2 border-gray-400 outline-none"
                  />
                </label>
                <label>
                  <input
                    name="lastName"
                    type="text"
                    maxLength="20"
                    placeholder="Last Name"
                    className="w-40 bg-transparent font-normal text-xl leading-[25px]  text-white capitalize border-b-2 border-gray-400 outline-none"
                  />
                </label>
              </div>

              <label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-[360px] bg-transparent font-normal text-xl leading-[25px]  text-white border-b-2 border-gray-400 outline-none"
                />
              </label>
              <div className="flex justify-center sm:justify-start items-center">
                <button
                  type="submit"
                  className=" bg-pinkBtn  p-4 gap-[10px] rounded-full w-[107px] h-[50px] mt-4"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 gap-5 border-t-2 border-gray-500 border-opacity-40">
        <Image
          src={coingeckoImage}
          alt="coingecko logo"
          className="w-40 h-10 mt-5"
        />
        <p className="font-bold text-base leading-5 text-center">
          Data provided by CoinGecko
        </p>
      </div>

      <p className="font-bold text-base leading-5 text-center my-5">
        Cucoin© Copyright 2023. All rights reserved
      </p>
    </>
  );
};

export default Footer;
