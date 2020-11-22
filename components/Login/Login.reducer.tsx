import { SET_USER } from "./Login.actions";

const initialState = {
  user: null,
  token: null,
};

const setUser = (state) => {
  return {
    ...state,
    user: "me",
  };
};

const user = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case SET_USER: {
      return Object.assign({}, state, {
        ...state,
        // user: action.user,
        user: "me",
      });
    }
    default:
      return state;
  }
};

export default user;
