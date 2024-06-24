import { CDN_URL } from "../utils/constants";

// Inline style
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResturantCards = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restData?.info;
  const { deliveryTime } = restData?.info.sla;
  return (
    <div className="res-card" style={styleCard}>
      <h3>{name}</h3>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};

export default ResturantCards;
