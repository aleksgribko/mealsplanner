import {
  LOGIN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_OUT_SUCCESS,
} from "./auth.reducers";
import { SET_LOADING } from "../../redux/shared/reducers";
import api from "../../services/api";
import { showMessage, hideMessage } from "react-native-flash-message";
import SignUpForm from "../../entities/signUpFormClass";

// import {setToken, getToken, removeToken} from '../../services/cookies';
// import jwt from 'jsonwebtoken';

export const logIn = (email, password) => {
  return async (dispatch) => {
    // dispatch({ type: SET_LOADING, loading: true });

    try {
      const res = await api.login({ email, password });

      if (res != false) {
        dispatch(LOGIN_SUCCESS(res));
        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        console.log("CANT");
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
    } else {
      try {
        const res = await api.signup({
          email: dataOrError.value.email,
          password: dataOrError.value.password,
          name: dataOrError.value.name,
        });

        if (res) {
          dispatch(SET_LOADING(false));
          dispatch(SIGN_UP_SUCCESS(res));
        } else {
          dispatch(SET_LOADING(false));
          showMessage({
            message: "Can't sigh up2",
            type: "danger",
          });
        }
      } catch (error) {
        console.log(error);
        dispatch(SET_LOADING(false));
        showMessage({
          message: "Can't sigh up3",
          type: "danger",
        });
      }
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

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: SIGN_OUT_SUCCESS });
    return true;
  };
};
