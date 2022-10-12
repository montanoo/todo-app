import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      state.value[action.payload] = [];
    },
    addItem: (state, action) => {
      const category = action.payload.category;
      delete action.payload.category;
      console.log(state.value[category].push(action.payload));
    },
  },
});

export const { addCollection, addItem } = todoSlice.actions;

export const selectValue = (state) => state.todo.value;

export default todoSlice.reducer;
