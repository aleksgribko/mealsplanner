import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingList: null,
  additionalProducts: null,
};

const shoppingSlice = createSlice({
  name: "shoppingReducer",
  initialState,
  reducers: {
    SET_SHOPPING_LIST(state, action) {
      return {
        ...state,
        shoppingList: action.payload,
      };
    },
    SET_ADDITIONAL_PRODUCTS(state, action) {
      return {
        ...state,
        additionalProducts: action.payload,
      };
    },
  },
});

export const {
  SET_SHOPPING_LIST,
  SET_ADDITIONAL_PRODUCTS,
} = shoppingSlice.actions;

// Reducer
export default shoppingSlice.reducer;
