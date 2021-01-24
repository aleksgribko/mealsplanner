import { SET_LOADING, SET_NOTIFICATION } from "./types";

const initialState = {
  isLoading: false,
  notification: null,
};

export function globalReducers(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return Object.assign({}, state, {
        ...state,
        isLoading: action.isLoading,
      });
    case SET_NOTIFICATION:
      return Object.assign({}, state, {
        ...state,
        notification: action.notification,
      });

    default:
      return state;
  }
}
