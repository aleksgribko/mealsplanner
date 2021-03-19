import React, { useState, useEffect } from "react";
import Recipes from "./Recipes";
import { getCategories, createCategory } from "./Recipes.actions";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { showMessage } from "react-native-flash-message";

const RecipesWrap = ({ createCategoryAction, getCategoriesAction }) => {
  const [categoryName, setCategoryName] = useState("");
  const [activateCategoryInput, setActivateCategoryInput] = useState(false);

  const categories = useSelector((state) => state.recipes.categories);
  const recepies = useSelector((state) => state.recipes.recepies);
  const user = useSelector((state) => state.authentication.user);

  console.log(categories)
  useEffect(() => {
    !categories && getCategoriesAction(user.accessToken);
  }, [categories]);

  const handleCreateCategory = () => {
    if (!categoryName.length) {
      showMessage({
        message: "Enter a name",
        type: "danger",
      });
    } else {
      createCategoryAction(categoryName, user.accessToken);
    }
  };

  const toggleCategoryCreateInput = (bool) => {
    setActivateCategoryInput(bool);
  };

  return (
    <Recipes
      categories={categories}
      activateCategoryInput={activateCategoryInput}
      toggleCategoryCreateInput={toggleCategoryCreateInput}
      handleCreateCategory={handleCreateCategory}
      setCategoryName={setCategoryName}
      categoryName={categoryName}
    />
  );
};

const actionCreators = {
  createCategoryAction: createCategory,
  getCategoriesAction: getCategories,
};

export default connect(null, actionCreators)(RecipesWrap);
