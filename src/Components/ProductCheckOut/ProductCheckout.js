import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import "./ProductCheckout.css";

const ProductCheckout = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://enigmatic-river-27840.herokuapp.com/product/" + productId)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="main-container">
      <Header></Header>
      <div className="table-area">
        <h2 className="mb-4 ms-5">Checkout</h2>
        <table className="table-box">
          <tbody>
            <tr style={{ color: "#a6a6a6" }}>
              <td>Description</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
            <tr style={{ fontWeight: "bold" }}>
              <td>{product.name}</td>
              <td className="ps-4">1</td>
              <td>${product.price}</td>
            </tr>
            <tr style={{ fontWeight: "bold" }}>
              <td>Total</td>
              <td></td>
              <td>${product.price}</td>
            </tr>
          </tbody>
        </table>
        <button className="checkout-btn">checkout</button>
      </div>
    </div>
  );
};

export default ProductCheckout;
