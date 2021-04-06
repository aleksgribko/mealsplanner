import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../globalStyle/variables";
import ButtonGeneral from "../Shared/ButtonGeneral";
import InputBox from "../Shared/InputField";
import stylesheet from "./style";

const styles = StyleSheet.create(stylesheet);

const ShoppingList = ({
  additionalProducts,
  showForm,
  handleShowForm,
  handleModifyFormInputs,
  handleAddItem,
  newItemToBuy,
  handleDeleteItem,
}) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>What else to buy</Text>
      {additionalProducts.map((item, ind) => {
        return (
          <View style={styles.itemLine} key={ind}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
            <View style={styles.itemLineActions}>
              <CheckBox
                disabled={false}
                value={item.bought}
                style={styles.icon}
                // onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <TouchableOpacity onPress={() => handleDeleteItem(item._id)}>
                <MaterialCommunityIcons
                  name={"delete-outline"}
                  size={20}
                  style={styles.icon}
                  color={colors.color3}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      <ButtonGeneral
        text={"Add item"}
        variant={"solid"}
        onPress={() => handleShowForm(true)}
      />
      {showForm ? (
        <View style={styles.formOverlap}>
          <View style={styles.form}>
            <Text>Add new item</Text>
            <InputBox
              info="Name"
              variant={"grey"}
              value={newItemToBuy.name}
              onChangeText={(text) => handleModifyFormInputs("name", text)}
            />
            <InputBox
              info="Quantity"
              variant={"grey"}
              value={newItemToBuy.quantity}
              onChangeText={(text) => handleModifyFormInputs("quantity", text)}
            />
            <View style={styles.overlayActionWrap}>
              <ButtonGeneral
                text={"Save"}
                variant={"solid"}
                onPress={() => handleAddItem()}
              />
              <ButtonGeneral
                text={"Cancel"}
                variant={"red"}
                onPress={() => handleShowForm(false)}
              />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ShoppingList;
