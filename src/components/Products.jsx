import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import '../css/product.css';
import { HeartFill } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const Products = () => {
  const [item, setItem] = useState(null);
  const [likedItems, setLikedItems] = useState({});
  const { id } = useParams();
  const dressItems = JSON.parse(localStorage.getItem("items")) || [];

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (err) {
        console.log("Error fetching item from API", err);
      }
    };

    fetchItem();
  }, [id]);

  const toggleLike = (itemId) => {
    setLikedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div>
      <Nav />
      
      {item ? (
        <div className="img-container">
          <img src={item.image} alt={item.title} />
          <strong>{item.title.slice(0, 30)}...</strong>
          <br />
          <small>{item.description}</small>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button
              style={{
                padding: "5px",
                width: "100px",
                height: "50px",
                margin: "10px",
                backgroundColor: "green",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            >
              &#8377;{item.price}
            </button>
            <button
              style={{
                padding: "5px",
                width: "100px",
                height: "50px",
                margin: "10px",
                backgroundColor: "blue",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <p>Items loading....</p>
      )}

      {dressItems.length > 0 ? (
        <div>
          {dressItems.map((dressItem) => (
            <Link to={`/products/${dressItem.id}`} key={dressItem.id}>
              <div className="items">
                <img src={dressItem.image} alt={dressItem.title} className="image" />
                <p className="title">{dressItem.title.slice(0, 25)}</p>
                <strong className="price">
                  Sign up to see pricing
                  <span>
                    <HeartFill
                      size={20}
                      color={likedItems[dressItem.id] ? "red" : "lightgray"}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLike(dressItem.id);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                </strong>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No items found.</p>
      )}
      
      <Footer />
    </div>
  );
};

export default Products;
