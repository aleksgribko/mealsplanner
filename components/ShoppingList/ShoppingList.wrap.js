import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ShoppingList from "./ShoppingList";
import { connect, useSelector } from "react-redux";
import { Value } from "react-native-reanimated";
import {
  getAdditionalProductsList,
  addAdditionalProduct,
  deleteAdditionalProduct
} from "./ShoppingList.actions";
import { showMessage } from "react-native-flash-message";

const ShoppingListWrap = ({
  getAdditionalProductsListAction,
  addAdditionalProductAction,
  deleteAdditionalProductAction
}) => {
  const [newItemToBuy, setNewItemToBuy] = useState({
    name: "",
    quantity: "",
    bought: false,
  });
  const [showForm, setShowForm] = useState(false);

  const family = useSelector((state) => state.globalReducers.family);
  const user = useSelector((state) => state.authentication.user);

  const additionalProducts = useSelector(
    (state) => state.shopping.additionalProducts
  );

  useEffect(() => {
    !additionalProducts && getAdditionalProductsListAction();
  }, []);

  const handleModifyFormInputs = (type, value) => {
    setNewItemToBuy({
      ...newItemToBuy,
      [type]: value,
    });
  };

  const handleShowForm = (show) => {
    setShowForm(show);
  };

  const handleDeleteItem = (name) => {
    deleteAdditionalProductAction(name);
  };

  const handleAddItem = () => {
    if (newItemToBuy.name.length && newItemToBuy.quantity.length) {
      handleShowForm(false)
      setNewItemToBuy({
        name: "",
        quantity: "",
        bought: false,
      })
      addAdditionalProductAction(newItemToBuy);
    } else {
      showMessage({
        message: "You didn't provide quantity or name",
        type: "danger",
      });
    }
  };

  if(!additionalProducts) return <View></View>

  return (
    <ShoppingList
      showForm={showForm}
      handleShowForm={handleShowForm}
      handleModifyFormInputs={handleModifyFormInputs}
      additionalProducts={additionalProducts}
      newItemToBuy={newItemToBuy}
      handleAddItem={handleAddItem}
      handleDeleteItem={handleDeleteItem}
    />
  );
};

const actionCreators = {
  getAdditionalProductsListAction: getAdditionalProductsList,
  addAdditionalProductAction: addAdditionalProduct,
  deleteAdditionalProductAction: deleteAdditionalProduct,

};

export default connect(null, actionCreators)(ShoppingListWrap);
