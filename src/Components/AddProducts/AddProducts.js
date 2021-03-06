import React from "react";
import Admin from "../Admin/Admin";
import "./AddProducts.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://enigmatic-river-27840.herokuapp.com/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side response", res));

    console.log(productData);
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "250a0c984f45afbe3250c5a6612b0d44");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="admin-panel">
      <Admin />
      <div className=" product-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="pb-2">
            Product name
          </label>
          <label htmlFor="price" className="margin">
            Add price
          </label>
          <br />
          <input name="name" ref={register} />

          <input name="price" ref={register} />
          <br />
          <input name="image" type="file" onChange={handleImageUpload} />

          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input className="submit-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
