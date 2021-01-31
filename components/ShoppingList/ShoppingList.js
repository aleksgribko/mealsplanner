import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../globalStyle/variables";

const food = [
  {
    name: "eggs",
    quantity: "6 pc",
    bought: false,
  },
  {
    name: "milk",
    quantity: "2 l",
    bought: false,
  },
  {
    name: "pizza",
    quantity: "1 pc",
    bought: false,
  },
];

const ShoppingList = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>What else to buy</Text>
      {food.map((item, ind) => {
        return (
          <View style={styles.itemLine}>
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
    </View>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
  itemLine: {
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
});
