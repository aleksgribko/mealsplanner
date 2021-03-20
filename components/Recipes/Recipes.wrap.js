import React, { useState, useEffect } from "react";
import Recipes from "./Recipes";
import { getCategories, createCategory, getMeals } from "./Recipes.actions";
import { connect, useSelector } from "react-redux";
import { showMessage } from "react-native-flash-message";
import AddRecipeModal from "./AddRecipeModal";
import { Modal } from "react-native";

const RecipesWrap = ({
  createCategoryAction,
  getCategoriesAction,
  getMealsAction,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activateCategoryInput, setActivateCategoryInput] = useState(false);
  const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);
  const [userRecipeInput, setUserRecipeInput] = useState({
    name: "",
    description: "",
    numberOfPpl: "",
    category: null,
    ingredients: null,
  });

  console.log(userRecipeInput)

  const categories = useSelector((state) => state.recipes.categories);
  const meals = useSelector((state) => state.recipes.meals);
  const user = useSelector((state) => state.authentication.user);

  useEffect(() => {
    !meals && getMealsAction(user.accessToken);
  }, [meals]);

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

  const handleChangeInput = (type, val) => {
    let filteredVal = null;
    if (type === "numberOfPpl") {
      filteredVal = val.replace(/[^0-9]/g, "");
    }
     
    setUserRecipeInput({
      ...userRecipeInput,
      [type]: type === "numberOfPpl" ? filteredVal : val,
    });
  };

  return (
    <>
      <Recipes
        categories={categories}
        activateCategoryInput={activateCategoryInput}
        toggleCategoryCreateInput={toggleCategoryCreateInput}
        handleCreateCategory={handleCreateCategory}
        setCategoryName={setCategoryName}
        categoryName={categoryName}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setShowAddRecipeModal={setShowAddRecipeModal}
      />

      <Modal
        animationType="slide"
        visible={showAddRecipeModal}
        transparent={true}
      >
        <AddRecipeModal
          setShowAddRecipeModal={setShowAddRecipeModal}
          handleChangeInput={handleChangeInput}
          userRecipeInput={userRecipeInput}
          categories={categories}
        />
      </Modal>
    </>
  );
};

const actionCreators = {
  createCategoryAction: createCategory,
  getCategoriesAction: getCategories,
  getMealsAction: getMeals,
};

export default connect(null, actionCreators)(RecipesWrap);
