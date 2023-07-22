import React from "react";
import Card from "./UIelements/Card";
import Filter from "./Filter";

const ExploreProduct = () => {
  return (
    <section className=" bg-gray-100 mx-auto px-16 lg:px-28 pt-40 pb-20 md:pb-40">
      <Filter />
      <div class="grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 my-10	">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default ExploreProduct;
