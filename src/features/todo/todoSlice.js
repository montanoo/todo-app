import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      state.value[action.payload] = {};
    },
  },
});

export const { addCollection } = todoSlice.actions;

export const selectValue = (state) => state.todo.value;

export default todoSlice.reducer;
