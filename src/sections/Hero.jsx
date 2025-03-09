import React, { useState } from "react";
import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  //w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* LEFT */}
      <div className="xl:w-2/5 flex flex-col gap-[50px] justify-center items-start w-full">
        <p>Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex gap-[50px]">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="text-3xl font-palanquin font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* RIGHT */}

      <div className="relative xl:w-3/5 flex justify-center items-center bg-yellow-200 ">
        <img src={bigShoeImg} alt="bigShoe1" />

        <div className="absolute flex sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoeObj, index) => (
            <ShoeCard
              key={index}
              shoeObj={shoeObj}
              bigShoeImg={bigShoeImg}
              setBigShoeImg={(shoe) => setBigShoeImg(shoe)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
