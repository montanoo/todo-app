import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = todoSlice.actions;

export const selectValue = (state) => state.todo.value;

export default todoSlice.reducer;
