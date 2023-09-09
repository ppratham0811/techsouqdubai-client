import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return {
        ...state,
        products: [],
      };
    },
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

export const { addToCart, removeFromCart, updateQty, existsInCart, clearCart } =
  cartSlice.actions;
export const currentCartState = (state) => state.cart.products;
export default cartSlice.reducer;
