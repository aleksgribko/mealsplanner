import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: null,
  categories: null,
};

const recipesSlice = createSlice({
  name: "recipesReducer",
  initialState,
  reducers: {
    SET_MEALS(state, action) {
      return {
        ...state,
        meals: action.payload,
      };
    },
    SET_CATEGORIES(state, action) {
      return {
        ...state,
        categories: action.payload,
      };
    },
  },
});

export const { SET_MEALS, SET_CATEGORIES } = recipesSlice.actions;
// Reducer
export default recipesSlice.reducer;
