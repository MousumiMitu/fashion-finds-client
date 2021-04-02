import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import "./Orders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://enigmatic-river-27840.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const totalPrice = orders.reduce(
    (sum, amount) => sum + parseInt(amount.price),
    0
  );

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="order-container">
          <div className="d-flex justify-content-between align-content-center">
            <h3>
              Order Summary
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="ms-2"
                style={{ color: "purple" }}
              />
            </h3>
            <h5 className="mt-2">total orders: {orders.length}</h5>
          </div>
          {orders.map((order) => (
            <div className="order-section">
              <h5 style={{ margin: "auto 0" }}>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="me-3"
                  style={{ color: "purple" }}
                />
                {order.name}
              </h5>
              <p style={{ margin: "auto 0" }}>$ {order.price}</p>
            </div>
          ))}
          <h5 className="total-price">Total amount: ${totalPrice}</h5>
        </div>
      </div>
    </div>
  );
};

export default Orders;
