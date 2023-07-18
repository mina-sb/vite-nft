import React from "react";

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex flex-row  space-x-3 px-3  lg:px-6 font-medium ">
      <li className="px-3 font-bold text-gray-700 cursor-pointer hover:text-sky-500 duration-1000">
        Home
      </li>
      <li className="px-3 font-bold text-gray-700 cursor-pointer hover:text-sky-500 duration-1000">
        About
      </li>
      <li className="px-3 font-bold text-gray-700 cursor-pointer hover:text-sky-500 duration-1000">
        Newsletter
      </li>
      <li className="px-3 text-gray-700 font-bold cursor-pointer hover:text-sky-500 duration-1000">
        Login
      </li>
    </ul>
  );
};

export default NavLinks;
