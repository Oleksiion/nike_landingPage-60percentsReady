import React from "react";

const ShoeCard = ({ shoeObj, bigShoeImg, setBigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== shoeObj.thumbnail) setBigShoeImg(shoeObj.bigShoe);
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === shoeObj.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          className="object-contain"
          src={shoeObj.thumbnail}
          alt={shoeObj.thumbnail}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
