import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faPlus } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  return (
    <div className="admin-container ">
      <h3 className="pt-4 text-center">
        <Link to="home" style={{ textDecoration: "none", color: "white" }}>
          Fashion finds
        </Link>
      </h3>
      <div className="product-management">
        <Link
          to="manageProducts"
          className="mb-3"
          style={{ textDecoration: "none", color: "white" }}
        >
          <FontAwesomeIcon className="me-1" icon={faThLarge} /> Manage products
        </Link>
        <Link
          to="addProducts"
          style={{ textDecoration: "none", color: "white" }}
        >
          <FontAwesomeIcon className="me-2" icon={faPlus} />
          Add product
        </Link>
      </div>
    </div>
  );
};

export default Admin;
