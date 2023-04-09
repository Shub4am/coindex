import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

const Success = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-screen justify-center items-center text-3xl mt-20">
        <p>Thank you for joining us 🎉</p>
      </div>
    </>
  );
};

export default Success;
