import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      return {
        userId: "",
        email: "",
      };
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { login, logout, setEmail } = userSlice.actions;

export const selectUser = (state) => state.user.userId;
export const getEmail = (state) => state.user.email;

export default userSlice.reducer;
