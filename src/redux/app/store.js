import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../slices/FoodItemSlice";

export const store = configureStore({
  reducer: {
    foodCount: foodReducer,
  },
});
