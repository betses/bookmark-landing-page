import React from 'react';
import error from '../assets/images/icon-error.svg';

const Contact = () => {
  return (
    <div className="bg-soft-blue">
      <div className="px-10 pt-24 pb-16 space-y-5 lg:pt-14 lg:space-y-8">
        <div className="space-y-3 text-center text-white lg:space-y-12">
          <p className="tracking-[.2em] lg:text-xs">35,000+ ALREADY JOINED</p>
          <h2 className="text-xl font-medium lg:text-3xl lg:px-[36%]">
            Stay up-to-date with what we're doing
          </h2>
        </div>
        <div className="flex flex-col space-y-5 lg:flex-row lg:justify-center lg:items-center lg:space-y-0 lg:space-x-5">
          <div className="flex items-center px-3 bg-white rounded-md">
            <input className="w-full py-4 outline-none lg:py-3 lg:w-72" />
            <img src={error} className="hidden w-5 h-5" />
          </div>
          <button className="p-5 font-medium text-white rounded-md bg-soft-red lg:px-6 lg:py-3">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
