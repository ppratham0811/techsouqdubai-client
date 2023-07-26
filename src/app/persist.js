import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localStorage from "redux-persist/es/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "techs0uqdubai",
  storage: localStorage,
};

export const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const currentStore = (state) => state.cart;
export default persistStore(store);
