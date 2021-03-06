import React from "react";
import { useHistory } from "react-router";
import "./Products.css";

const Products = (props) => {
  const { name, imageURL, price, _id } = props.product;
  const history = useHistory();
  const handleClickBuy = (productId) => {
    const url = `/product/${productId}`;
    history.push(url);
  };

  return (
    <div className="col-md-4">
      <div className=" card-section">
        <div className="product-img">
          <img src={imageURL} alt="" />
        </div>
        <div className="text-center">
          <h5 style={{ color: "#800060" }}>{name}</h5>
          <h6 style={{ color: "#330014" }}>${price}</h6>
          <button onClick={() => handleClickBuy(_id)} className="primary-btn">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
