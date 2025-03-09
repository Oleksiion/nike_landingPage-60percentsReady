import React from "react";
import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section className="max-container padding-y" id="products">
      <div>
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="grid grid-cols-4 mt-10 gap-6">
          {products.map((item, index) => (
            <PopularProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
