import { useContext } from "react";
import { AppContext } from "../context";
import "./Item.css";
const Item = ({ item }) => {
  const { dispatchItemEvent } = useContext(AppContext);

  const handleRemoveItem = () => {
    dispatchItemEvent("REMOVE_ITEM", { itemId: item.id });
  };
  return (
    <div className="Item">
      <span>{item.title}</span>
      <span>Quantity:{item.quantity}</span>
      <span>${item.price}</span>
      <button className="btn" onClick={handleRemoveItem}>
        Delete
      </button>
    </div>
  );
};

export default Item;