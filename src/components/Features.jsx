import React from 'react';
import Tabs from './TabComponent/Tabs';

const Features = () => {
  return (
    <div>
      <div className=" px-10 py-12 space-y-7 lg:px-[33%]">
        <h1 className="font-medium text-2xl text-center text-very-dark-blue">
          Features
        </h1>
        <p className="text-grayish-blue text-center font-normal text-base">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <Tabs />
    </div>
  );
};

export default Features;
