import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const history = useHistory()
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const product = {...inputs} 
    addProduct(product, dispatch);
    alert("Product added successfully")
    history.push("/admin/dashboard");


  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input name="img" onChange={handleChange} type="text" placeholder="paste here img Url" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input name="title" onChange={handleChange} type="text" placeholder="title..." />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" onChange={handleChange} type="text" placeholder="Price..." />
        </div>
        <div className="addProductItem">
          <label>Rating</label>
          <input name="rating" onChange={handleChange} type="text" placeholder="Rating..." />
        </div>
        <div className="addProductItem">
          <label>Offer Price</label>
          <input name="offer_price" onChange={handleChange} type="text" placeholder="Offer Price..." />
        </div>
        <div className="addProductItem">
          <label>MRP</label>
          <input name="mrp" onChange={handleChange} type="text" placeholder="Mrp.." />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input name="category" onChange={handleChange} type="text" placeholder="category..." />
        </div>
        <div className="addProductItem">
          <label>Brand</label>
          <input name="brand" type="text" placeholder="Brand..." />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
