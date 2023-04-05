import React from 'react';
import tab1 from '../assets/images/illustration-hero.svg';

const Header = () => {
  return (
    <div className="md:flex flex-row-reverse">
      <div className=" pb-5 mt-10">
        <div className="relative">
          <img className="relative " src={tab1} alt="tab" />
          <div className="absolute -z-50 top-16 right-0 rounded-l-full h-56 w-[18.5rem] bg-soft-blue" />
        </div>
      </div>
      <div className=" px-8 py-12 space-y-7">
        <h1 className="font-medium text-3xl text-center">
          A Simple Book Mark Manager
        </h1>
        <p className="text-grayish-blue text-center">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-soft-blue py-3 shadow-md px-2 rounded-md text-white">
            Get it on Chrome
          </button>
          <button className=" bg-gray-100 shadow-lg py-3 rounded-md">
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
