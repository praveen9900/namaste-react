import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  let listOfRestaurants2 = [
    {
      info: {
        id: 1,
        name: "KFC",
        cuisines: ["Burgers", "Biryani"],
        avgRating: "4.5",
        deliveryTime: "25 mins",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      },
    },
    {
      info: {
        id: 2,
        name: "MCD",
        cuisines: ["Burgers", "Pizza"],
        avgRating: "3.5",
        deliveryTime: "31 mins",
        cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
      },
    },
    {
      info: {
        id: 3,
        name: "Meghanas Food",
        cuisines: ["Biryani", "South Indian"],
        avgRating: "4.1",
        deliveryTime: "35 mins",
        cloudinaryImageId: "gsou4stfkt5lguzppytj",
      },
    },

    {
      info: {
        id: 4,
        name: "The Filter Coffee",
        cuisines: ["BreakFast", "North Indian", "Coffee"],
        avgRating: "3.9",
        deliveryTime: "47 mins",
        cloudinaryImageId: "e707e3eb3c241c42d7bce2b6314a8ddf",
      },
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //console.log(listOfRestaurants);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   // console.log(json.data);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection!
      </h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="ml-4 bg-green-100 px-3 py-1 rounded-lg hover:bg-green-300"
            onClick={() => {
              const filteredRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="ml-4 bg-gray-200 px-3 py-1 flex items-center rounded-lg hover:bg-gray-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (resto) => resto.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((resto) => (
          <Link key={resto.info.id} to={"/restaurants/" + resto.info.id}>
            <RestaurantCard resData={resto} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
