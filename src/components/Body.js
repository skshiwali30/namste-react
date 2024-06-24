import ResturantCards from "./resturantcards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import Search from "./Search";

const Body = () => {
  const [listOfData, setListOfData] = useState([]);
  const [filteredListOfRestaurent, setFilteredListOfRestaurent] = useState([]);
  const [searchText, setsearchText] = useState("Type your search here");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://run.mocky.io/v3/0d7e4bda-8f07-4a0d-a985-321f0e5c21d2"
    );
    const json = await data.json();
    console.log(json);

    // Optional chaining
    setListOfData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  // if(listOfData.length === 0)
  //   return <Shimmer />;

  return (listOfData?.length) === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* <Search /> */}
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onClick={(e) => {
              setsearchText("");
            }}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredListOfRest = listOfData.filter(
                (res) =>
                  res.info.cuisines.find((str) =>
                    str.toLowerCase().includes(searchText.toLowerCase())
                  ) 
                  // && res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredListOfRestaurent(filteredListOfRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="topRated">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredListOfData = listOfData.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredListOfRestaurent(filteredListOfData);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredListOfRestaurent?.map((restaurent) => (
          <Link key={restaurent.info.id} to={"/restaurents/" + restaurent.info.id}><ResturantCards restData={restaurent} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
