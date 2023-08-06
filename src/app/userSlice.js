import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: "",
    email: "",
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.userId = "";
      state.email = "";
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { login, logout, setEmail } = userSlice.actions;

export const selectUser = (state) => state.userId;
export const getEmail = (state) => state.email;

export default userSlice.reducer;
