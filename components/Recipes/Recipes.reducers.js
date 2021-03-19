import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: null,
  categories: null,
};

const recipesSlice = createSlice({
  name: "recipesReducer",
  initialState,
  reducers: {
    SET_RECIPES(state, action) {
      return {
        ...state,
        recipes: action.payload,
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

export const { SET_RECIPES, SET_CATEGORIES } = recipesSlice.actions;
// Reducer
export default recipesSlice.reducer;
