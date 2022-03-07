import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
// import RecipesExpandable from "./RecipesExpandable";
import { connect } from "react-redux";
import stylesheet from "./style";
import ButtonGeneral from "../Shared/ButtonGeneral";
import InputBox from "../Shared/InputField";
import Loader from "../Shared/Loader";
import MealsAccordion from "../Shared/MealsAccordion";

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
  handleToggleRecipeModal,
  meals,
  setMealDescriptionModalVisible,
}) => {
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
          {categories?.length ? (
            <ButtonGeneral
              text={"Add new recipe"}
              variant={"solid"}
              onPress={() => handleToggleRecipeModal(true)}
              marginVertical={2}
            />
          ) : null}
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
        <MealsAccordion
          activeSections={activeCategory || []}
          meals={meals}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          handleMealClick={setMealDescriptionModalVisible}
        />
      </ScrollView>
    </View>
  );
};

const actionCreators = {};

export default connect(null, actionCreators)(Recipes);
