import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  family: null,
};

const globalSlice = createSlice({
  name: "authenticationReducer",
  initialState,
  reducers: {
    SET_LOADING(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
  GET_FAMILY_SUCCESS(state, action) {
    return {
      ...state,
      family: action.payload,
    };
  },
});

export const { SET_LOADING, GET_FAMILY_SUCCESS } = globalSlice.actions;
// Reducer
export default globalSlice.reducer;
