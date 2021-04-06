import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import stylesheet from "./style";

const styles = StyleSheet.create(stylesheet);

const ModalMealDescription = ({
  setMealDescriptionModalVisible,
  mealDescriptionModalVisible,
}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{mealDescriptionModalVisible.name}</Text>
        <Text style={styles.modalText}>
          {mealDescriptionModalVisible.description}
        </Text>
        <Text style={styles.modalText}>
          {mealDescriptionModalVisible.numberOfPeople}
        </Text>
        {mealDescriptionModalVisible.ingredients?.length
          ? mealDescriptionModalVisible.ingredients.map((ingr, ind) => {
              return (
                <Text key={ind} style={styles.modalText}>
                  {ingr.ingredient.name} : {ingr.quantity}{" "}
                  {ingr.ingredient.measurement}
                </Text>
              );
            })
          : null}
        <TouchableHighlight
          style={styles.buttonClose}
          onPress={() => {
            setMealDescriptionModalVisible(false);
          }}
        >
          <Text style={styles.buttonAddText}>Close</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ModalMealDescription;
