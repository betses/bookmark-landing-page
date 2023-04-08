import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="p-10 flex justify-between items-center">
      <Logo color="#252b46" />
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
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
