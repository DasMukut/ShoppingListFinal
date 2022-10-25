import React, { useContext } from "react";
import { AppContext } from "../context";
import Item from "./Item";
import Footer from "./Footer";
import "./ItemList.css";
const ItemList = () => {
  const { items } = useContext(AppContext);
  const { dispatchItemEvent, showDisplay } = useContext(AppContext);
  const handlebuttonToggle = () => {
    const item = { showDisplay };
    dispatchItemEvent("Toggle_Button", { newItem: item });
  };
  const handlebuttonAdd = () => {
    const item = { showDisplay };
    dispatchItemEvent("ADD_Button", { newItem: item });
  };

  return (
    <div class="wrapper">
      <div className="main">
        <h1>Personal Shopping List </h1>
        <div className="header_btn">
          <button className="btn" onClick={handlebuttonToggle}>
            Go Back
          </button>
          <span>Daily Groceries</span>
          <button className="btn" onClick={handlebuttonAdd}>
            +Add Item
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ItemList;