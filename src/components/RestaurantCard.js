import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    avgRating,
    costForTwo,
    cuisines,
    cloudinaryImageId,
    sla,
    areaName,
  } = resData?.info;
  // console.log(resData);
  return (
    <div className="m-4 p-4 w-[250px] h-[420px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <label className="text-xs mt-[8.5rem] absolute bg-black text-white rounded-lg p-0.5">
        {resData?.info?.aggregatedDiscountInfoV3?.header  +
          " " +
          resData?.info?.aggregatedDiscountInfoV3?.subHeader}
      </label>
      <img
        className="w-60 h-40 rounded-lg"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-bold text-sky-500">{areaName}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};


export default RestaurantCard;
