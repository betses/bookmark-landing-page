import React, { useState, useEffect } from 'react';
import illustration1 from '../../assets/images/illustration-features-tab-1.svg';
import illustration2 from '../../assets/images/illustration-features-tab-2.svg';
import illustration3 from '../../assets/images/illustration-features-tab-3.svg';
// import { motion } from "framer-motion";

const Tabs = () => {
  const [infoIndex, setInfoIndex] = useState(0);

  const image = [illustration1, illustration2, illustration3];

  const heading = [
    'Bookmark in one click',
    'Intelligent search',
    'Share your bookmarks',
  ];

  const description = [
    '  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    '  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    '  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  ];

  useEffect(() => {
    let feature = document.querySelectorAll(
      '.features__main__navigation > button',
    );
    feature[0].classList.add('active');
  }, []);

  const switchTabs = (index) => {
    setInfoIndex(index);
    console.log(infoIndex);
    let feature = document.querySelectorAll(
      '.features__main__navigation > button',
    );
    for (let i = 0; i < feature.length; i++) {
      feature[i].classList.remove('active');
    }
    feature[index].classList.add('active');
    let info = document.querySelectorAll(
      '.features__main__info__image, .features__main__info__details',
    );
    for (let i = 0; i < info.length; i++) {
      info[i].classList.add('active');
    }
    setTimeout(() => {
      for (let i = 0; i < info.length; i++) {
        info[i].classList.remove('active');
      }
    }, 1000);
  };

  return (
    <div className="features">
      <div className="features__main">
        <div className="flex flex-col px-8 features__main__navigation pb-11 md:flex-row md:justify-center">
          <button
            onClick={() => switchTabs(0)}
            className="py-6 border-gray-200 border-y md:border-t-0"
          >
            <span
              className={`text-lg text-very-dark-blue h-full py-6 md:px-7 ${
                infoIndex === 0 ? 'border-b-4 border-soft-red' : ''
              }`}
            >
              Simple Bookmarking
            </span>
          </button>
          <button
            onClick={() => switchTabs(1)}
            className="py-6 border-b border-gray-200"
          >
            <span
              className={`text-lg text-very-dark-blue h-full py-6 md:px-7 ${
                infoIndex === 1 ? 'border-b-4 border-soft-red' : ''
              }`}
            >
              Speedy Searching
            </span>
          </button>
          <button
            onClick={() => switchTabs(2)}
            className="py-6 border-b border-gray-200"
          >
            <span
              className={`text-lg text-very-dark-blue h-full py-6 md:px-7 ${
                infoIndex === 2 ? 'border-b-4 border-soft-red' : ''
              }`}
            >
              Easy Sharing
            </span>
          </button>
        </div>
        <div className="px-10 mt-10 features__main__info md:flex lg:ml-28">
          <div className="flex justify-center md:shrink-0">
            <img
              className="features__main__info__image"
              src={image[infoIndex]}
              alt="info-image"
            />
          </div>
          <div className="features__main__info__details py-10 md:pr-[18%] lg:pl-[8%]">
            <h2 className="text-xl font-medium text-center text-very-dark-blue md:text-start">
              {heading[infoIndex]}
            </h2>
            <p className="pt-5 text-base font-normal leading-6 text-center text-grayish-blue md:text-start">
              {description[infoIndex]}
            </p>
            <div className="hidden mt-10 md:flex">
              <button className="px-5 py-3 text-sm font-medium text-white rounded-lg bg-soft-blue">
                More info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
