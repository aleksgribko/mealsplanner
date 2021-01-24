import { SET_NOTIFICATION, SET_LOADING } from "./actionstypes";

export const setNotification = (notif) => {
  return async (dispatch) => {
    dispatch({ type: SET_NOTIFICATION, notification: notif || null });
  };
};

export const setLoader = (isSet) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, loading: isSet });
  };
};
