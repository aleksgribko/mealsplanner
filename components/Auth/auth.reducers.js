import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authenticationSlice = createSlice({
  name: "authenticationReducer",
  initialState,
  reducers: {
    LOGIN_SUCCESS(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },
    SIGN_UP_SUCCESS(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },
    SIGN_OUT_SUCCESS(state) {
      return {
        ...state,
        user: null,
      };
    },
  },
});

export const {
  LOGIN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_OUT_SUCCESS,
} = authenticationSlice.actions;
// Reducer
export default authenticationSlice.reducer;
