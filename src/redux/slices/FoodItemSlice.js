import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodCount: 0,
  foodDetails: [],
};

const foodItemSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    incrementFoodCount: (state, action) => {
      const { id, title, price } = action.payload;
      if (state.foodDetails[id]) {
        state.foodDetails[id].quantity += 1;
      } else {
        state.foodDetails[id] = { title, price, quantity: 1 };
      }
      state.foodCount += 1;
    },
    decrementFoodCount: (state, action) => {
      const { id } = action.payload;
      if (state.foodDetails[id] && state.foodDetails[id].quantity > 0) {
        state.foodDetails[id].quantity -= 1;
        state.foodCount -= 1;
      }
    },
    addToCart: (state, action) => {
      foodDetails = action.payload;
    },
  },
});

export const { incrementFoodCount, decrementFoodCount, addToCart } = foodItemSlice.actions;

export default foodItemSlice.reducer;
