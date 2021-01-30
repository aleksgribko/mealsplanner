import {
  LOGIN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_OUT_SUCCESS,
} from "./auth.reducers";
// import { SET_LOADING } from "../../redux/shared/types";
import api from "../../services/api";

// import {setToken, getToken, removeToken} from '../../services/cookies';
// import jwt from 'jsonwebtoken';

export const logIn = (email, password) => {
  return async (dispatch) => {
    // dispatch({ type: SET_LOADING, loading: true });

    try {
      console.log("EMAIL", email, password);
      const res = await api.login({ email, password });

      if (res) {
        console.log(res);
        dispatch(LOGIN_SUCCESS(res));
        // dispatch({ type: SET_LOADING, loading: false });
      } else {
        // dispatch({ type: SET_LOADING, loading: false });

        console.log(res);
      }

      return res;
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      console.log("This error", error);
    }
  };
};

export const signUp = (entries) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, loading: true });

    // try {

    // if (resUser) {
    //   dispatch({ type: SIGN_UP_SUCCESS, user: resUser });
    //   dispatch({ type: SET_LOADING, loading: false });
    // }

    return {};
    // } catch (error) {
    //   //   dispatch({type: LIST_LOAD_FAILURE, error});
    //   console.log('This error', error);
    // }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: SIGN_OUT_SUCCESS });
    return true;
  };
};
