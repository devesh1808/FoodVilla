import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { restraunt } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    deliveryTime,
  } = restraunt?.data;
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
