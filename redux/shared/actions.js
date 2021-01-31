import { SET_LOADING, GET_FAMILY_SUCCESS } from "./reducers";
import api from "../../services/api";

export const setLoader = (isSet) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(isSet));
  };
};

export const getFamily = (familyId) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));

    try {
      const res = await api.getFamily(familyId);

      if (res != false) {
        dispatch(GET_FAMILY_SUCCESS(res));
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
