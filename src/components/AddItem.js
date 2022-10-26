import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import Footer from "./Footer";
import "./AddItem.css";
const AddItem = () => {
  const { dispatchItemEvent, showDisplay } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem = () => {
    if (title !== "" && quantity !== "" && price !== "") {
      const item = { id: Math.random(), title, quantity, price };
      dispatchItemEvent("ADD_ITEM", { newItem: item });
    } else {
      alert("Please Fill The Input First ");
    }
  };

  const handlebuttonToggle1 = () => {
    const item = { showDisplay };
    dispatchItemEvent("Toggle_Button", { newItem: item });
  };

  return (
    <div className="wrapper">
      <div className="main_add">
        <h1>Personal Shopping List </h1>
        <div className="header_add_btn">
          <button className="btn_Back" onClick={handlebuttonToggle1}>
            Go Back
          </button>
          <span style={{ paddingBottom: "1.0rem" , fontWeight:"bold" , fontSize:"2.5rem"}}> Add Items </span>
          <span style={{ visibility: "hidden" }}> Hidden </span>
        </div>
      </div>

      <div>
        <div className="input">
          <label>Title</label>
          <input
            className="myInput"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Insert Title"
            required
          />
        </div>

        <div className="input">
          <label>Quantity</label>
          <input
            className="myInput"
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            placeholder="0"
            required
            min="0"
          />
        </div>

        <div className="input">
          <label>Price</label>
          <input
            className="myInput"
            type="number"
            value={price}
            min="0"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
            placeholder="Total Amount"
            // style={{width:"100px"}}
          />
        </div>
        <br />
        <button className="btn_add" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <Footer />
      {/* <p className="footer">
          <small> A Newton School Project By @ Mukut Das</small>
       </p> */}
    </div>
  );
};

export default AddItem;
