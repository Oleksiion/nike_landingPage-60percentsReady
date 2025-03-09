import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full gap-2">
      <img src={imgURL} alt="mainIcon" className="w-[282px] h-[282px]" />
      <div className="flex gap-2 items-center">
        <img src={star} alt="star" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h2 className="text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h2>
      <p className="font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
// const PopularProductCard = ({ imgURL, name, price }) => {
//   return (
//     <div className='flex flex-1 flex-col w-full max-sm:w-full'>
//
//       <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
//         {name}
//       </h3>
//       <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
//         {price}
//       </p>
//     </div>
//   );
// };
