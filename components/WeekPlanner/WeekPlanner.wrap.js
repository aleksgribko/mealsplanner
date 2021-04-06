import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import WeekPlanner from "./WeekPlanner";
import { connect, useSelector } from "react-redux";
import { getInitialCatMealsIng } from "../Recipes/Recipes.actions";
import { addMealToPlannedDay } from "./WeekPlanner.actions";

const WeekPlannerWrap = ({
  getInitialCatMealsIngAction,
  addMealToPlannedDayAction,
}) => {
  const [modalPickMealVisible, setModalPickMealVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = useSelector((state) => state.recipes.categories);
  const meals = useSelector((state) => state.recipes.meals);
  const user = useSelector((state) => state.authentication.user);

  useEffect(() => {
    (!categories || !meals) && getInitialCatMealsIngAction(user.token);
  }, [meals, categories]);

  const handleAddMealToDay = (meal) => {
    // console.log(meal._id, modalPickMealVisible);
    addMealToPlannedDayAction(
      meal._id,
      modalPickMealVisible.date,
      modalPickMealVisible.meal
    );
  };
  return (
    <WeekPlanner
      user={user}
      meals={meals}
      categories={categories}
      setModalPickMealVisible={setModalPickMealVisible}
      modalPickMealVisible={modalPickMealVisible}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      handleMealClick={handleAddMealToDay}
    />
  );
};

const actionCreators = {
  getInitialCatMealsIngAction: getInitialCatMealsIng,
  addMealToPlannedDayAction: addMealToPlannedDay,
};

export default connect(null, actionCreators)(WeekPlannerWrap);
