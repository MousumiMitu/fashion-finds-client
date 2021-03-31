import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-container ">
      <h3 className="pt-4 text-center">
        <Link to="home" style={{ textDecoration: "none" }}>
          E-commerce
        </Link>
      </h3>
      <div className="product-management">
        <Link to="manageProducts" style={{ textDecoration: "none" }}>
          Manage products
        </Link>
        <Link to="addProducts" style={{ textDecoration: "none" }}>
          Add product
        </Link>
      </div>
    </div>
  );
};

export default Admin;
