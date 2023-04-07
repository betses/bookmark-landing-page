import React from 'react';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="py-16 bg-very-dark-blue">
      <div className="flex flex-col items-center">
        <Logo />
        <ul className="text-white">
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>
        <div>
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
