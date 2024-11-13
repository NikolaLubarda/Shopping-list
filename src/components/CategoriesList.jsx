import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, removeCategory } from "../store/categoriesSlice";

const CategoriesList = ({}) => {
  const [categoryName, setCategoryName] = useState("");
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    if (categoryName.trim()) {
      dispatch(addCategory({ id: Date.now(), name: categoryName.trim() }));
      setCategoryName("");
    }
  };
  const handleRemoveCategory = (id) => {
    dispatch(removeCategory(id));
  };
  return (
    <div>
      <h2>Categories</h2>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Add new category"
      />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {" "}
            {category.name}
            <button onClick={() => handleRemoveCategory(category.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
