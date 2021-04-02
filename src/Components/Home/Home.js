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
    <div className="background-container">
      <Header />
      <div className="main-container">
        <div className="row">
          {products == "" ? (
            <div class="d-flex justify-content-center">
              <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            products.map((product) => (
              <Products product={product} key={product._id}></Products>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
