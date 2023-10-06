import RestrauntCard from "./RestrauntCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const[resList, setResList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantList.filter((res) => res.data.avgRating > 4);
            setResList(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restraunt-list">
        {resList.map((restraunts) => (
          <RestrauntCard key={restraunts.data.id} restraunt={restraunts} />
        ))}
      </div>
    </div>
  );
};

export default Body;
