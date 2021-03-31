import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-river-27840.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="row">
        {products.map((product) => (
          <Products product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default Home;
