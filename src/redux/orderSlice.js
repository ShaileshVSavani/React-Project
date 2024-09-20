import { createSlice } from "@reduxjs/toolkit";

// Assuming orders are stored in localStorage or are retrieved from an API.
const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: JSON.parse(localStorage.getItem("orders")) || [], // Fetching from localStorage
  },
  reducers: {
    addOrder: (state, action) => {
      const newOrder = action.payload;
      state.orders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(state.orders)); // Update localStorage
    },
  },
});

export const { addOrder } = ordersSlice.actions;
// export default ordersSlice.reducer;
export const orderReducer = ordersSlice.reducer
