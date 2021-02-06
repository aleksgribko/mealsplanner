import { GET_FAMILY_SUCCESS, SET_LOADING } from "../../redux/shared/reducers";
import api from "../../services/api";
// import { showMessage, hideMessage } from "react-native-flash-message";
// import SignUpForm from "../../entities/signUpFormClass";

// import {setToken, getToken, removeToken} from '../../services/cookies';
// import jwt from 'jsonwebtoken';

// eslint-disable-next-line import/prefer-default-export
export const createFamily = (userId, familyName) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));

    try {
      const res = await api.createFamily({ userId, familyName });
      console.log("HERE IS FAMILY RESULT", res);
      if (res !== false) {
        dispatch(GET_FAMILY_SUCCESS(res.family));
        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        console.log("CAN'T get family2");
      }

      return true;
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      console.log("This error", error);
      return false;
    }
  };
};
