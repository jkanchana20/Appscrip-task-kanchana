import React from "react";
import Products from "./Products";
import Hero from "./Hero";
import { BrowserRouter,Route,Routes } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
