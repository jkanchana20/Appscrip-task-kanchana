import React, { useEffect, useState } from "react";
import "../css/shopping.css";
import AsideBar from "./AsideBar";

const Shopping = () => {
  const [dressItems, setDressItems] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setDressItems(data);
      } catch (err) {
        console.log("Error fetching dressItems from API", err);
      }
    };

    fetchData();
  }, []);

  const hideFilter = () => setIsSidebarVisible(false);
  const showFilters = () => setIsSidebarVisible(true);

  return (
    <div className="shopping-container">
      <div className="discover">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Explore our curated collection of products to find what suits your style.
        </p>
        <hr/>
      </div>
     
      <div className="options">
        <div className="hide-filter">
          <p className="total">TOTAL ITEMS {dressItems.length}</p>
          {isSidebarVisible ? (
            <p className="filter-button" onClick={hideFilter}>
              {">"} Hide Filters
            </p>
          ) : (
            <p className="filter-button" onClick={showFilters}>
              {">"} Show Filters
            </p>
          )}
        </div>
        <div className="recommend">
          <select className="recommend-select">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="priceLowToHigh">PRICE: LOW TO HIGH</option>
            <option value="priceHighToLow">PRICE: HIGH TO LOW</option>
          </select>
        </div>
      </div>
      <div className="main">
        {isSidebarVisible && <AsideBar />}
        <section className={`items-container ${isSidebarVisible ? "" : "expanded"}`}>
          {dressItems.map((item, index) => (
            <div key={index} className="items">
              <img src={item.image} alt={item.title} className="image" />
              <p className="title">{item.title.slice(0, 30)}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Shopping;
