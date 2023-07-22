import React from "react";
import Button from "./FormElements/Button";
import { input } from "./Footer.module.css";
import client1 from "../../assets/client-1.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <section className=" bg-white mx-auto px-16 lg:px-28 pt-20">
      <div class="grid auto-cols-auto sm:grid-cols-2 justify-between lg:grid-cols-4 w-full gap-16 mt-2 mb-24">
        <div>
          <div>
            <span className="font-bold text-xl md:text-3xl text-white px-1.5 mr-1 rounded bg-sky-500">
              N
            </span>
            <span className="font-bold text-xl md:text-3xl">Nuron</span>
          </div>
          <p className="my-4 text-gray-700">
            Created with the collaboration of over 60 of the world's best Nuron
            Artists.
          </p>
          <div class=" w-full border-b-2 my-10"></div>
          <p class="font-bold text-lg text-gray-800">
            Get The Latest Nuron Updates
          </p>
          <div className="w-full flex justify-between border-2 border-gray-900 rounded-md mt-5">
            <input className={`${input} outline-0 ml-1 grow`} />
            <Button class="text-sm px-2   py-2 rounded rounded-l-none font-medium bg-gray-900 hover:bg-sky-500">
              Subscribe
            </Button>
          </div>
          <p class=" text-lg text-gray-500 my-1">
            Email is safe. We don't spam.
          </p>
        </div>
        <div className="lg:pl-8">
          <span className="font-bold text-xl md:text-3xl">Nuron</span>
          <ul>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Protocol Explore{" "}
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              System Token
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Otimize Time
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Visual Checking{" "}
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Fadeup System
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Activity Log{" "}
            </li>

            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              System Auto Since
            </li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-xl md:text-3xl">Information</span>
          <ul>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Protocol Explore{" "}
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              System Token
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Otimize Time
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Visual Checking{" "}
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Fadeup System
            </li>
            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              Activity Log{" "}
            </li>

            <li className="my-2 text-gray-500 text-left text-lg	">
              {" "}
              System Auto Since
            </li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-xl md:text-3xl">Recent Sold Out</span>
          <div class="flex items-center  justify-start mt-5">
            <img src={client1} className="w-14 h-14  rounded-full" />
            <div class=" pl-3">
              <h5 class=" text-base font-semibold tracking-tight text-gray-900 hover:text-sky-500 cursor-pointer">
                #21 The Wonder
              </h5>
              <p class="font-xs text-gray-500 ">$2100,000</p>
              <p class="font-xs text-sky-500 font-bold">0.244wETH</p>
            </div>
          </div>
          <div class=" w-full border-b-2 my-2"></div>
          <div class="flex items-center  justify-start mt-1">
            <img src={client1} className="w-14 h-14  rounded-full" />
            <div class=" pl-3">
              <h5 class=" text-base font-semibold tracking-tight text-gray-900 hover:text-sky-500 cursor-pointer">
                #21 The Wonder
              </h5>
              <p class="font-xs text-gray-500 ">$2100,000</p>
              <p class="font-xs text-sky-500 font-bold">0.244wETH</p>
            </div>
          </div>
          <div class=" w-full border-b-2 my-1"></div>
          <div class="flex items-center  justify-start mt-2">
            <img src={client1} className="w-14 h-14  rounded-full" />
            <div class=" pl-3">
              <h5 class=" text-base font-semibold tracking-tight text-gray-900 hover:text-sky-500 cursor-pointer">
                #21 The Wonder
              </h5>
              <p class="font-xs text-gray-500 ">$2100,000</p>
              <p class="font-xs text-sky-500 font-bold">0.244wETH</p>
            </div>
          </div>
        </div>
      </div>
      <div class=" w-full border-b-2 my-4"></div>

      <div className="flex flex-wrap sm:justify-center items-center lg:justify-between ">
        <p className="my-4 mx-6 text-gray-500">
          ©2022 Nuron, Inc. All rights reserved.
        </p>
        <p className="my-4  mx-6 text-gray-500">Terms . Privacy Policy</p>
        <ul className="flex">
          <li className="my-4 text-gray-500 mx-3 p-3 rounded-full duration-1000 hover:text-white hover:cursor-pointer hover:bg-sky-500">
            {<FiFacebook />}
          </li>
          <li className="my-4 text-gray-500 mx-3 p-3 rounded-full duration-1000 hover:text-white hover:cursor-pointer hover:bg-sky-500">
            {<FiTwitter />}
          </li>
          <li className="my-4 text-gray-500 mx-3 p-3 rounded-full duration-1000 hover:text-white hover:cursor-pointer hover:bg-sky-500">
            {<FiInstagram />}
          </li>
          <li className="my-4 text-gray-500 mx-3 p-3 rounded-full duration-1000 hover:text-white hover:cursor-pointer hover:bg-sky-500">
            {<FiLinkedin />}
          </li>
          <li className="my-4 text-gray-500 mx-3 p-3 rounded-full duration-1000 hover:text-white hover:cursor-pointer hover:bg-sky-500">
            {<FiMail />}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
