import React, { useEffect } from "react";
import { useState } from "react";
import Admin from "../Admin/Admin";
import ProductList from "../ProductList/ProductList";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-river-27840.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="admin-panel">
      <Admin />
      <div className="managing-section">
        <h3>Product Lists</h3>
        {products.map((product) => (
          <ProductList product={product} key={product._id}></ProductList>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
