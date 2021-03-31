import React from "react";
import "./Products.css";

const Products = (props) => {
  const { name, imageURL, price } = props.product;
  console.log(props.product);
  return (
    <div className="col-md-4">
      <div className=" card-section">
        <div className="product-img">
          <img src={imageURL} alt="" />
        </div>
        <div className="text-center">
          <h4 style={{ color: "#800033" }}>{name}</h4>
          <h5 style={{ color: "#330014" }}>${price}</h5>
          <button className="primary-btn">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
