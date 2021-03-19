import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from "react-native";
// import RecipesExpandable from "./RecipesExpandable";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import stylesheet from "./style";
import ButtonGeneral from "../Shared/ButtonGeneral";
import InputBox from "../Shared/InputField";

const styles = StyleSheet.create(stylesheet);

const Recipes = ({
  categories,
  handleCreateCategory,
  toggleCategoryCreateInput,
  activateCategoryInput,
  setCategoryName,
  categoryName,
}) => {
  // const recipes = useSelector((state) => state.globalReducers.family);
  // mealTypes

  return (
    <View style={styles.wrap}>
      <ScrollView style={styles.wrapContent}>
        <Text>{categories?.length}</Text>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <ButtonGeneral
            text={"Add new recipe"}
            variant={"solid"}
            onPress={() => handleShowForm(true)}
          />
          {activateCategoryInput ? (
            <InputBox
              info="Category name"
              variant={"grey"}
              value={categoryName}
              onChangeText={(text) => setCategoryName(text)}
            />
          ) : null}
          <View style={styles.inline}>
            <ButtonGeneral
              text={activateCategoryInput ? "Save" : "Add new category"}
              variant={"solid"}
              onPress={
                activateCategoryInput
                  ? () => handleCreateCategory()
                  : () => toggleCategoryCreateInput(true)
              }
            />
            {activateCategoryInput ? (
              <ButtonGeneral
                text={"Cancel"}
                variant={"red"}
                onPress={() => toggleCategoryCreateInput(false)}
              />
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const actionCreators = {};

export default connect(null, actionCreators)(Recipes);
