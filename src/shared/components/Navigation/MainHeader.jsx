import React from "react";
import NavLinks from "./NavLinks";
import { MdNotificationsNone } from "react-icons/md";
import { RiMoonLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Button from "../FormElements/Button";

const MainHeader = (props) => {
  return (
    <header className=" bg-gray-100 mx-auto py-5 px-4 md:px-12 lg:px-28">
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto">
        <div>
          <span className="font-bold text-xl md:text-3xl text-white px-1.5 mr-1 rounded bg-sky-500">
            N
          </span>
          <span className="font-bold text-xl md:text-3xl">Nuron</span>
        </div>
        <NavLinks />
        <div className="flex flex-row items-center justify-end">
          <label
            htmlFor="email"
            className="hidden sm:block relative text-gray-400 focus-within:text-gray-600"
          >
            {
              <MdOutlineSearch className="text-gray-400 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3" />
            }
            <input
              class="appearance-none border border-sky-500 rounded-md w-40  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Search here..."
            ></input>
          </label>
          <Button class="text-xs mx-2 px-2 py-2.5 rounded font-bold bg-gray-900 hover:bg-sky-500">
            Save changes
          </Button>

          <span>
            {
              <MdNotificationsNone
                className="text-lg text-gray-600 border-solid border border-gray-300 rounded-full mx-1 md:mx-2 p-2 w-8 h-8  md:w-10 md:h-10 cursor-pointer
           hover:scale-110 hover:bg-gray-300 duration-1000"
              />
            }
          </span>
          <span>
            {
              <MdMenu
                className="lg:hidden text-md  font-light border-solid border border-gray-300 rounded-full mx-1 md:mx-2 p-2 w-8 h-8  md:w-10 md:h-10 cursor-pointer
            hover:scale-110 hover:bg-gray-300 duration-1000"
              />
            }
          </span>
          <span>
            {
              <RiMoonLine
                className="text-md  font-light border-solid border border-gray-300  rounded-full ml-1 md:ml-2 p-2 w-8 h-8  md:w-10 md:h-10 cursor-pointer
            hover:scale-110 hover:bg-gray-300 duration-1000"
              />
            }
          </span>
        </div>{" "}
      </div>
    </header>
  );
};

export default MainHeader;
