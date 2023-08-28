import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.products.find((item) => item.$id === action.payload.$id)) {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }
    },
    removeFromWishlist: (state, action) => {
      return {
        ...state,
        products: state.products.filter((item) => item.$id !== action.payload),
      };
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const currentWishlistState = (state) => state.wishlist.products;
export default wishlistSlice.reducer;
