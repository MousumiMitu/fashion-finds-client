import React from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import "./Home.css";

const products = [
  {
    name: "women shoes",
    price: 555,
    pic: "horsebelt-square-pumps.jpg",
  },
  {
    name: "women shoes",
    price: 555,
    pic: "horsebelt-square-pumps.jpg",
  },
  {
    name: "women shoes",
    price: 555,
    pic: "horsebelt-square-pumps.jpg",
  },
  {
    name: "women shoes",
    price: 555,
    pic: "ace-bee-trainer.jpg",
  },
  {
    name: "women shoes",
    price: 555,
    pic: "horsebelt-square-pumps.jpg",
  },
  {
    name: "women shoes",
    price: 555,
    pic: "horsebelt-square-pumps.jpg",
  },
];

const Home = () => {
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
