import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../globalStyle/variables";
import ButtonGeneral from "../Shared/ButtonGeneral";
import InputBox from "../Shared/InputField";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
  itemLine: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
  },
  itemName: {},
  itemQuantity: {
    color: "grey",
  },
  itemLineActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  formOverlap: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "rgba(255,255,255,1)",
    width: 300,
    borderRadius: 15,
    padding: 20,
  },
});

const ShoppingList = ({
  additionalProducts,
  showForm,
  handleShowForm,
  handleModifyFormInputs,
  newItemToBuy,
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
              <MaterialCommunityIcons
                name={"delete-outline"}
                size={20}
                style={styles.icon}
                color={colors.color3}
              />
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
              onChangeText={(text) => setEmail(text)}
            />
            <InputBox
              info="Quantity"
              variant={"grey"}
              value={newItemToBuy.quantity}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ShoppingList;
