import RestrauntCard from "./RestrauntCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    return (
      <div className="restraunt-list">
        {
          restaurantList.map((restraunts) => (<RestrauntCard key={restraunts.data.id} restraunt={restraunts}/>))
        }
      </div>
    );
};

export default Body;