import { GET_FAMILY_SUCCESS, SET_LOADING } from "../../redux/shared/reducers";
import api from "../../services/api";
// import { showMessage, hideMessage } from "react-native-flash-message";
// import SignUpForm from "../../entities/signUpFormClass";

// import {setToken, getToken, removeToken} from '../../services/cookies';
// import jwt from 'jsonwebtoken';

export const createFamily = (userId, familyName) => {
  return async (dispatch) => {
    // dispatch({ type: SET_LOADING, loading: true });

    try {
      const res = await api.createFamily({ userId, familyName });

      if (res != false) {
        dispatch(GET_FAMILY_SUCCESS(res));
        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        console.log("CAN'T");
      }

      return res;
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      console.log("This error", error);
    }
  };
};
