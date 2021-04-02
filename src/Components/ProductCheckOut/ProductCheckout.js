import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import "./ProductCheckout.css";

const ProductCheckout = () => {
  let { productId } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [product, setProduct] = useState({});
  const { name, price } = product;

  useEffect(() => {
    fetch("https://enigmatic-river-27840.herokuapp.com/product/" + productId)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const handleCheckOut = () => {
    const newOrder = {
      ...loggedInUser,
      name,
      price,
      orderTime: new Date().toDateString("dd,mm,yyyy,g:i A TT"),
    };
    fetch("https://enigmatic-river-27840.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="main-container">
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
                <td>{name}</td>
                <td className="ps-4">1</td>
                <td>${price}</td>
              </tr>
              <tr style={{ fontWeight: "bold" }}>
                <td>Total</td>
                <td></td>
                <td>${price}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleCheckOut} className="checkout-btn">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
