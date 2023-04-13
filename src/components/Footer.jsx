import React from 'react';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="py-10 bg-very-dark-blue lg:py-0">
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <ul className="space-y-5 text-center text-white py-7 lg:flex lg:space-y-0 lg:space-x-8 lg:text-xs lg:items-center">
          <li className="lg:pr-10">
            <Logo color="#ffffff" />
          </li>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>
        <div className="flex space-x-8">
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
