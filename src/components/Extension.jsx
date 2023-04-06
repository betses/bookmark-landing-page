import React from 'react';
import chrome from '../assets/images/logo-chrome.svg';
import firefox from '../assets/images/logo-firefox.svg';
import opera from '../assets/images/logo-opera.svg';
import bgDots from '../assets/images/bg-dots.svg';

const Extension = () => {
  const data = [
    {
      image: chrome,
      title: 'Add to chrome',
      subtitle: 'minimum version 62',
      style: 'mt-0',
    },
    {
      image: firefox,
      title: 'Add to chrome',
      subtitle: 'minimum version 62',
      style: 'mt-10',
    },
    {
      image: opera,
      title: 'Add to chrome',
      subtitle: 'minimum version 62',
      style: 'mt-20',
    },
  ];
  return (
    <div className=" px-10 py-12">
      <div className="space-y-7">
        <h2 className="font-medium text-2xl text-center text-very-dark-blue">
          Download the extension
        </h2>
        <p className="text-grayish-blue text-center font-normal text-base">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="md:flex md:space-x-8 justify-center mt-10">
        {data.map((value) => (
          <div
            className={`flex flex-col py-5 shadow-lg rounded-lg h-full ${value.style}`}
            key={value}
          >
            <div className="flex justify-center pt-10">
              <img src={value.image} />
            </div>
            <h2 className="font-medium text-2xl text-center text-very-dark-blue pt-8">
              {value.title}
            </h2>
            <p className="text-grayish-blue text-center font-normal text-base pt-2">
              {value.subtitle}
            </p>
            <img src={bgDots} className="pt-10" />
            <div className="mt-5 flex justify-center">
              <button className="px-5 py-3 bg-soft-blue text-white rounded-md font-medium">
                Add & Install Extension
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extension;
