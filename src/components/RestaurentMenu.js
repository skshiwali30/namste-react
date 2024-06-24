import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_URL } from "../utils/constants";

const RestaurentMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { restId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_URL + restId);
    const json = await data.json();

    setRestInfo(json.data);
  };

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} : {"Rs."}
            {item.card.info.price}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
