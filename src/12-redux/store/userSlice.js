import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "coutner",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    customPayload: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, customPayload } = userSlice.actions;

export default userSlice.reducer;
