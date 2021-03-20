import { showMessage } from "react-native-flash-message";
import { SET_MEALS, SET_CATEGORIES } from "./Recipes.reducers";
import { SET_LOADING } from "../../redux/shared/reducers";

import api from "../../services/api";

// eslint-disable-next-line import/prefer-default-export
export const createCategory = (name, token) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await api.create("categories", token, name);
      console.log(res);
      if (res.ok) {
        const resCat = await api.getAll("categories", token);
        console.log(resCat);

        if (resCat.ok) {
          dispatch(SET_CATEGORIES(resCat.data));
        } else {
          showMessage({
            message: resCat.error,
            type: "danger",
          });
        }

        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        showMessage({
          message: "er",
          type: "danger",
        });
      }
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      showMessage({
        message: "Error",
        type: "danger",
      });
      dispatch(SET_LOADING(false));
      return false;
    }
  };
};

export const getCategories = (token) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await api.getAll("categories", token);

      if (res.ok) {
        dispatch(SET_CATEGORIES(res.data));
        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        showMessage({
          message: "er",
          type: "danger",
        });
      }
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      showMessage({
        message: "Error",
        type: "danger",
      });
      dispatch(SET_LOADING(false));
      return false;
    }
  };
};

export const getMeals = (token) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await api.getAll("meals", token);

      if (res.ok) {
        dispatch(SET_MEALS(res.data));
        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        showMessage({
          message: res.error,
          type: "danger",
        });
      }
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      showMessage({
        message: "Error",
        type: "danger",
      });
      dispatch(SET_LOADING(false));
      return false;
    }
  };
};


export const createMeal = (data, token) => {
  return async (dispatch) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await api.create("meals", token, data);
      console.log(res);
      if (res.ok) {
        const resCat = await api.getAll("meals", token);
        console.log(resCat);

        if (resCat.ok) {
          dispatch(SET_MEALS(resCat.data));
        } else {
          showMessage({
            message: resCat.error,
            type: "danger",
          });
        }

        dispatch(SET_LOADING(false));
      } else {
        dispatch(SET_LOADING(false));
        showMessage({
          message: "er",
          type: "danger",
        });
      }
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      showMessage({
        message: "Error",
        type: "danger",
      });
      dispatch(SET_LOADING(false));
      return false;
    }
  };
};
