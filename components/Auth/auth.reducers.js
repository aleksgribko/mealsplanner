import {
  LOGIN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_OUT_SUCCESS,
} from './auth.actionstypes';

const initialState = {
  //   token: token || null,
  user: null,
};

export function authentication(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        user: action.user,
      });

    case SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        user: action.user,
      });
    case SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        user: null,
      });
    default:
      return state;
  }
}
