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
    setUserState: (state, action) => {
      return {
        ...state.user,
        userId: action.payload.userId,
        email: action.payload.email,
      };
    },
    deleteUserState: (state) => {
      return {
        userId: "",
        email: "",
      };
    },
  },
});

export const { setUserState, deleteUserState } = userSlice.actions;

export const selectUserFromState = (state) => state.user;

export default userSlice.reducer;
