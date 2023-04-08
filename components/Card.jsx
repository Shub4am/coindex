import Image from 'next/image';
import React from 'react';
import rightArrow from '../assets/icons/rightArrow.png';

const Card = ({ imgSrc, title, subText, cta }) => {
  return (
    <div className="flex justify-center items-center mb-20">
      <div className="w-[300px] h-[300px] rounded-3xl border  border-white border-opacity-30 flex-row justify-center items-center">
        <div className="flex justify-center">
          <Image
            src={imgSrc}
            alt="image bg"
            className="w-[100px] h-[100px] mt-2 mb-4"
          />
        </div>
        <p className="font-bold text-xl leading-[25px] text-center  mb-4">
          {title}
        </p>
        <p className="font-normal text-base leading-5 text-[#FFFFFFCC] text-center p-2 mb-2">
          {subText}
        </p>
        <div className="flex justify-center items-center">
          <p className="font-bold text-base leading-5 text-center">{cta}</p>
          <Image
            src={rightArrow}
            alt="right arrow icon"
            className="w-[10px] h-2 ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
