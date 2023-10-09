import RestrauntCard from "./RestrauntCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

  //getting api data using fetch method
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json(); //converting data from api into json

    console.log(json);
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(resList.length === 0){
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setResList(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restraunt-list">
        {resList.map((restraunts) => (
          <RestrauntCard key={restraunts.info.id} restraunt={restraunts} />
        ))}
      </div>
    </div>
  );
};

export default Body;
