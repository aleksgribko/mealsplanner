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
import Accordion from "react-native-collapsible/Accordion";
import Loader from "../Shared/Loader";

const styles = StyleSheet.create(stylesheet);

const Recipes = ({
  categories,
  handleCreateCategory,
  toggleCategoryCreateInput,
  activateCategoryInput,
  setCategoryName,
  categoryName,
  activeCategory,
  setActiveCategory,
  setShowAddRecipeModal,
}) => {
  // const recipes = useSelector((state) => state.globalReducers.family);
  // mealTypes

  console.log(categories);

  if (!categories) return <Loader />;

  const renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.name}</Text>
      </View>
    );
  };

  const renderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.name + "outside"}</Text>
      </View>
    );
  };

  const updateSections = (activeSections) => {
    console.log(activeSections);
    setActiveCategory(activeSections.includes(undefined) ? [] : activeSections);
  };

  return (
    <View style={styles.wrap}>
      <ScrollView style={styles.wrapContent}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          <ButtonGeneral
            text={"Add new recipe"}
            variant={"solid"}
            onPress={() => setShowAddRecipeModal(true)}
            marginVertical={2}
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
              marginVertical={2}
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
        <Accordion
          sections={categories}
          expandMultiple={false}
          touchableComponent={TouchableOpacity}
          activeSections={activeCategory || []}
          renderHeader={renderHeader}
          duration={400}
          renderContent={renderContent}
          onChange={updateSections}
        />
      </ScrollView>
    </View>
  );
};

const actionCreators = {};

export default connect(null, actionCreators)(Recipes);
