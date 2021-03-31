import React from "react";
import "./Products.css";

const Products = (props) => {
  const { name, pic, price } = props.product;
  return (
    <div className="col-md-4">
      <div className="card-section">
        <img src={`../../images/${pic}`} alt="" />
        <div className="text-center">
          <h3>{name}</h3>
          <h5>${price}</h5>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
