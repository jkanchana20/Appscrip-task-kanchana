import React, { useEffect, useState } from "react";
import "../css/shopping.css";
import AsideBar from "./AsideBar";
import { HeartFill } from "react-bootstrap-icons";
import Products from "./Products";
import {Link} from 'react-router-dom'

const Shopping = () => {
  const [dressItems, setDressItems] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [signup, setSignup] = useState(true);
  const [likedItems, setLikedItems] = useState({});
 localStorage.setItem("items",JSON.stringify(dressItems))
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
  const toggleSignup = () => setSignup(!signup);
  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="shopping-container">
      <div className="discover" style={{padding:"3px 7px"}}>
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>Explore our curated collection of products to find what suits your style.</p>
        <hr />
      </div>
     
      <div className="options">
        <div className="hide-filter">
          <p className="total">TOTAL ITEMS {dressItems.length}</p>
          {isSidebarVisible ? (
            <p className="filter-button" onClick={hideFilter}>
               Hide Filters
            </p>
          ) : (
            <p className="filter-button" onClick={showFilters}>
               Show Filters
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
        <section className={`items-container ${isSidebarVisible ? "" : "expanded"}`} width="70%" >
          {signup ? (
            dressItems.map((item, index) => (
              <Link to={`/products/${item.id}`} key={item.id}>
                <div className="items">
                <img src={item.image} alt={item.title} className="image" />
                <p className="title">{item.title.slice(0, 25)}</p>
                
                <strong className="price">Sign up to see pricing<span><HeartFill
                  size={20}
                  color={likedItems[index] ? "red" : "lightgray"}
                  onClick={() => toggleLike(index)}
                  style={{ cursor: "pointer" }} 
                /></span></strong>
                
                </div></Link>
              
            ))
          ) : (
            <div className="signup-message">
              <p>Please sign up to see the prices.</p>
              <button onClick={toggleSignup}>Sign Up</button>
            </div>
          )}
         
        </section>
      </div>
     
    </div>
  );
};

export default Shopping;
