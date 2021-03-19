import { SET_LOADING, GET_FAMILY_SUCCESS } from "./reducers";
import api from "../../services/api";

// export const setLoader = (isSet) => {
//   return async (dispatch) => {
//     dispatch(SET_LOADING(isSet));
//   };
// };

// eslint-disable-next-line import/prefer-default-export
export const getFamily = (userToken) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));

    try {
      const res = await api.getFamily(userToken);

      if (res !== false) {
        dispatch(GET_FAMILY_SUCCESS(res.data));
        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        console.log("CAN'T get family");
      }

      return res;
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      console.log("This error", error);
      dispatch(SET_LOADING(false));
      return false;
    }
  };
};
