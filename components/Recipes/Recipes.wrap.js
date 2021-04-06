import React, { useState, useEffect } from "react";
import Recipes from "./Recipes";
import {
  createCategory,
  createMeal,
  getInitialCatMealsIng,
} from "./Recipes.actions";
import { connect, useSelector } from "react-redux";
import { showMessage } from "react-native-flash-message";
import AddRecipeModal from "./AddRecipeModal";
import { Modal, TouchableHighlight, View } from "react-native";
import ModalMealDescription from "./ModalMealDescription";

const RecipesWrap = ({
  createCategoryAction,
  createMealAction,
  getInitialCatMealsIngAction,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activateCategoryInput, setActivateCategoryInput] = useState(false);
  const [activateIngredientInput, setActivateIngredientInput] = useState(false);
  const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);
  const [userRecipeInput, setUserRecipeInput] = useState({
    name: "",
    description: "",
    numberOfPpl: "",
    category: null,
    ingredients: [],
  });
  const [
    mealDescriptionModalVisible,
    setMealDescriptionModalVisible,
  ] = useState(false);

  const categories = useSelector((state) => state.recipes.categories);
  const meals = useSelector((state) => state.recipes.meals);
  const ingredients = useSelector((state) => state.recipes.ingredients);
  const user = useSelector((state) => state.authentication.user);

  useEffect(() => {
    (!categories || !meals || !ingredients) &&
      getInitialCatMealsIngAction(user.token);
  }, [meals, categories, ingredients]);

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

  const handleToggleRecipeModal = (bool) => {
    if (bool) {
      handleChangeInput("category", categories[0]);
      setShowAddRecipeModal(true);
    } else {
      setShowAddRecipeModal(false);
      setUserRecipeInput({
        name: "",
        description: "",
        numberOfPpl: "",
        category: null,
        ingredients: [],
      });
    }
  };

  const toggleCategoryCreateInput = (bool) => {
    setActivateCategoryInput(bool);
  };

  const handleCreateCategory = () => {
    if (!categoryName.length) {
      showMessage({
        message: "Enter a name",
        type: "danger",
      });
    } else {
      createCategoryAction(categoryName, user.token);
      toggleCategoryCreateInput(false);
    }
  };

  const handleChangeIngredientInput = (type, ind, val) => {
    const allAddedIngredients = [...userRecipeInput.ingredients];
    const findIngredientInArray = Object.assign({}, allAddedIngredients[ind]);

    let filteredVal = null;
    if (type === "quantity") {
      filteredVal = val.replace(/[^0-9]/g, "");
    }

    findIngredientInArray[type] = type === "quantity" ? filteredVal : val;

    allAddedIngredients[ind] = findIngredientInArray;

    setUserRecipeInput({
      ...userRecipeInput,
      ingredients: allAddedIngredients,
    });
  };

  const handlePressAddIngredient = () => {
    setUserRecipeInput({
      ...userRecipeInput,
      ingredients: [
        ...userRecipeInput.ingredients,
        {
          name: "",
          measurement: "gr",
          quantity: 0,
        },
      ],
    });
  };

  const handleAddRecipe = () => {
    setShowAddRecipeModal(false);
    createMealAction(
      { ...userRecipeInput, category: userRecipeInput.category._id },
      user.token
    );
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
        handleToggleRecipeModal={handleToggleRecipeModal}
        activateIngredientInput={activateIngredientInput}
        setActivateIngredientInput={setActivateIngredientInput}
        handleChangeIngredientInput={handleChangeIngredientInput}
        meals={meals}
        setMealDescriptionModalVisible={setMealDescriptionModalVisible}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={Boolean(mealDescriptionModalVisible)}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <ModalMealDescription
          setMealDescriptionModalVisible={setMealDescriptionModalVisible}
          mealDescriptionModalVisible={mealDescriptionModalVisible}
        />
      </Modal>

      <Modal
        animationType="slide"
        visible={showAddRecipeModal}
        transparent={true}
      >
        <AddRecipeModal
          handleToggleRecipeModal={handleToggleRecipeModal}
          handleChangeInput={handleChangeInput}
          userRecipeInput={userRecipeInput}
          categories={categories}
          handlePressAddIngredient={handlePressAddIngredient}
          handleChangeIngredientInput={handleChangeIngredientInput}
          handleAddRecipe={handleAddRecipe}
        />
      </Modal>
    </>
  );
};

const actionCreators = {
  createCategoryAction: createCategory,
  createMealAction: createMeal,
  getInitialCatMealsIngAction: getInitialCatMealsIng,
};

export default connect(null, actionCreators)(RecipesWrap);
