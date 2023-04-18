import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="p-10 flex justify-around items-center">
      <Logo color="#252b46" />
      <ul className=" text-black sm:hidden lg:flex lg:space-x-10 lg:text-lg lg:items-center">
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>CONTACT</li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lg:hidden"
        width="18"
        height="15"
      >
        <path
          fill="#242A45"
          fill-rule="evenodd"
          d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
        />
      </svg>
    </div>
  );
};

export default Navbar;
