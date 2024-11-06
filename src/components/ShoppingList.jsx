import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../store/itemsSlice";

const ShoppingList = ({}) => {
  const [itemName, setItemName] = useState("");
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (itemName) {
      dispatch(addItem({ id: Date.now(), name: itemName }));
      setItemName("");
    }
  };
  return (
    <div>
      <h2>ShoppingList</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="add new item"
      />
      <button onClick={handleAddItem}>Add item </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
