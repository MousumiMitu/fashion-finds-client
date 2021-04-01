import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";

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

  return (
    <div>
      <Header />
      <h3>total orders:{orders.length}</h3>
      {orders.map((order) => (
        <li key={order._id}>
          name: {order.name} ,price: {order.price}, {order.orderTime}
        </li>
      ))}
    </div>
  );
};

export default Orders;
