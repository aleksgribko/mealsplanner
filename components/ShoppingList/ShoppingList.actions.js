import { showMessage } from "react-native-flash-message";
import {
  SET_SHOPPING_LIST,
  SET_ADDITIONAL_PRODUCTS,
} from "./ShoppingList.reducers";
import { SET_LOADING } from "../../redux/shared/reducers";

import api from "../../services/api";

export const getAdditionalProductsList = () => {
  return async (dispatch, getState) => {
    const { authentication } = getState();
    const { token } = authentication.user;
    dispatch(SET_LOADING(true));

    try {
      const res = await api.getAll("additional-products", token);
      console.log(res);

      if (res.ok) {
        dispatch(SET_ADDITIONAL_PRODUCTS(res.data ? res.data : []));
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
        message: "Error: additional products",
        type: "danger",
      });
      dispatch(SET_LOADING(false));
      return false;
    }
  };
};

export const addAdditionalProduct = (data) => {
  return async (dispatch, getState) => {
    const { authentication } = getState();
    const { token } = authentication.user;

    dispatch(SET_LOADING(true));
    try {
      const res = await api.create("additional-products", token, data);
      console.log(res);
      if (res.ok) {
        dispatch(getAdditionalProductsList());
      } else {
        dispatch(SET_LOADING(false));
        showMessage({
          message: "Er: can't add a product",
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

export const deleteAdditionalProduct = (id) => {
  return async (dispatch, getState) => {
    const { authentication } = getState();
    const { token } = authentication.user;
    dispatch(SET_LOADING(true));
    try {
      const res = await api.delete("additional-products", id, token);
      console.log(res);

      if (res.ok) {
        dispatch(getAdditionalProductsList());
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
        message: "Error: additional products",
        type: "danger",
      });
      dispatch(SET_LOADING(false));
      return false;
    }
  };
};
