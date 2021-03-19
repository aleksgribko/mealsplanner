import React, { useState } from "react";
import { View, Text } from "react-native";
import ShoppingList from "./ShoppingList";
import { useSelector } from "react-redux";
import { Value } from "react-native-reanimated";

const ShoppingListWrap = () => {
  const [newItemToBuy, setNewItemToBuy] = useState({
    name: "",
    quantity: "",
    bought: false,
  });
  const [showForm, setShowForm] = useState(false);

  const family = useSelector((state) => state.globalReducers.family);

  const handleModifyFormInputs = (type, value) => {
    setNewItemToBuy({
      ...newItemToBuy,
      [type]: value,
    });
  };

  const handleShowForm = (show) => {
    if (show) return setShowForm(true);
    if (!show)
      return setNewItemToBuy({
        name: "",
        quantity: "",
        bought: false,
      });
  };

  return (
    <ShoppingList
      showForm={showForm}
      handleShowForm={handleShowForm}
      handleModifyFormInputs={handleModifyFormInputs}
      additionalProducts={family.additional_products}
      newItemToBuy={newItemToBuy}
    />
  );
};

export default ShoppingListWrap;
