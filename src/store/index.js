import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoriesReducer,
  },
});

export default store;
