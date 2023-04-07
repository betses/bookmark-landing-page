import React from 'react';
import error from '../assets/images/icon-error.svg';

const Contact = () => {
  return (
    <div className="bg-soft-blue">
      <div className="pt-24 pb-16 px-10 space-y-5">
        <div className="text-white text-center space-y-3">
          <p className="tracking-[.2em]">35,000+ ALREADY JOINED</p>
          <h2 className="text-xl font-medium">
            Stay up-to-date with what we're doing
          </h2>
        </div>
        <div className=" flex flex-col space-y-5 ">
          <div className="flex items-center bg-white px-3 rounded-md">
            <input className="py-4 outline-none w-full" />
            <img src={error} className="h-5 w-5 hidden" />
          </div>
          <button className="text-white p-5 bg-soft-red font-medium rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
