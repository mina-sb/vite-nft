import React from "react";
import img from "../../assets/img.png";
import Button from "./FormElements/Button";

const Main = () => {
  return (
    <main className="bg-gray-100 px-4 mx-auto md:px-12 lg:px-28 py-4 md:flex md:items-center">
      <div className="px-10 md:pr-0 lg:pl-20 lg:pr-0 mt-16 md:pl-8 md:w-7/12 lg:w-1/2 md:order-2 lg:flex">
        <img src={img} className="mx-auto md:ml-auto" />
      </div>
      <div className="mt-16 md:w-5/12 lg:w-1/2 px-16 md:px-0 lg:pr-16 text-left md:order-1">
        <h1 className="text-3xl font-normal md:font-semibold md:text-4xl md:leading-relaxed text-gray-800  lg:text-5xl lg:leading-normal">
          Discover Digital Art, Collect and Sell Your Specific NFTs.
        </h1>
        <p className="text-left text-xl font-medium text-gray-500 mt-4 md:mt-6">
          Partner with one of the world’s largest retailers to showcase your
          brand and products.
        </p>
        <Button class="mx-0 mt-6  text-sm md:text-base px-6 md:px-9 py-3 md:py-4 rounded-lg font-semibold md:font-bold bg-sky-500 hover:bg-gray-900">
          Get Started
        </Button>
        <Button class="mx-2 md:mx-1 mt-6 md:mt-3 text-sm md:text-base px-6 md:px-9 py-3 md:py-4 rounded-lg font-semibold md:font-bold bg-gray-900 hover:bg-sky-500">
          Create
        </Button>
      </div>
    </main>
  );
};

export default Main;
