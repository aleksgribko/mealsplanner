import { SET_LOADING, GET_FAMILY_SUCCESS } from "./reducers";
import api from "../../services/api";

// export const setLoader = (isSet) => {
//   return async (dispatch) => {
//     dispatch(SET_LOADING(isSet));
//   };
// };

// eslint-disable-next-line import/prefer-default-export
export const getFamily = () => {
  return async (dispatch, getState) => {

    const { authentication } = getState();
    const { user } = authentication;
    dispatch(SET_LOADING(true));

    try {
      const res = await api.getFamily(user.token);
      console.log(res);
      if (res.ok) {
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
