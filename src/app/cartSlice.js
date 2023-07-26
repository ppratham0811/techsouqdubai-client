import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (
        !state.products.find(
          (item) => item.productId === action.payload.productId
        )
      ) {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.productId !== action.payload
        ),
      };
    },
    updateQty: (state, action) => {
      state.products = state.products.map((productObject) => {
        if (productObject.productId === action.payload.productId) {
          return {
            ...productObject,
            qty: action.payload.qty,
          };
        } else {
          return {
            ...productObject,
          };
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, updateQty } = cartSlice.actions;
export const currentState = (state) => state;
export default cartSlice.reducer;
