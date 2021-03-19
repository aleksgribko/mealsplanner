import {
  LOGIN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_OUT_SUCCESS,
} from "./auth.reducers";
import { SET_LOADING } from "../../redux/shared/reducers";
import { storeData, removeData } from "../../services/storage";
import api from "../../services/api";
import { showMessage, hideMessage } from "react-native-flash-message";
import SignUpForm from "../../entities/signUpFormClass";

// import {setToken, getToken, removeToken} from '../../services/cookies';
// import jwt from 'jsonwebtoken';

export const logIn = (email, password) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));

    try {
      const res = await api.login({ email, password });
      if (res.ok) {
        storeData("user", JSON.stringify(res));
        dispatch(LOGIN_SUCCESS(res));
        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        removeData("user");
        showMessage({
          message: res.error || "Can't log in",
          type: "danger",
        });
      }

      return res;
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      console.log("This error", error);
      dispatch(SET_LOADING(false));
      showMessage({
        message: error,
        type: "danger",
      });
      return false;
    }
  };
};

export const signUp = (entries) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));

    const dataOrError = SignUpForm.checkEntries(
      entries.name,
      entries.email,
      entries.password,
      entries.confirmPassword
    );

    if (!dataOrError.ok) {
      dispatch(SET_LOADING(false));
      return showMessage({
        message: dataOrError.errorMessage,
        type: dataOrError.errorType,
      });
    }
    try {
      const res = await api.signup({
        email: dataOrError.value.email,
        password: dataOrError.value.password,
        name: dataOrError.value.name,
      });

      if (res.ok) {
        dispatch(SET_LOADING(false));
        dispatch(SIGN_UP_SUCCESS(res.data));
      } else {
        dispatch(SET_LOADING(false));
        showMessage({
          message: res.error || "Can't sigh up",
          type: "danger",
        });
      }
    } catch (error) {
      dispatch(SET_LOADING(false));
      showMessage({
        message: error || "Can't sigh up: Error",
        type: "danger",
      });
    }

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

export const restoreSession = (user) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await api.restoreSession(user.accessToken);
      console.log(res)
      if (res.ok) {
        dispatch(LOGIN_SUCCESS(res.data));
        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        removeData("user");
        showMessage({
          message: res.error,
          type: "danger",
        });
      }
    } catch (error) {
      console.log("Can't restore session");
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    removeData("user");
    dispatch(SIGN_OUT_SUCCESS());
    return true;
  };
};
