import React from 'react';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="py-10 bg-very-dark-blue">
      <div className="flex flex-col items-center">
        <Logo color="#ffffff" />
        <ul className="text-white space-y-5 py-7 text-center">
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
