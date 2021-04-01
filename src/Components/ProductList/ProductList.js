import React from "react";
import "./ProductList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ProductList = (props) => {
  const { name, price, imageURL, _id } = props.product;
  const handleDeleteProduct = (id) => {
    fetch(`https://enigmatic-river-27840.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <table>
        <tbody>
          <tr className="lists-item">
            <td>Name: {name}</td>
            <td>Price: {price}</td>
            <td>
              <button
                onClick={() => handleDeleteProduct(_id)}
                className="changing-btn"
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
