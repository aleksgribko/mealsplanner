import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../WelcomeScreen";
import ShoppingList from "../ShoppingList";
import WeekPlanner from "../WeekPlanner";
import Recipes from "../Recipes/Recipes";

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#cd0000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <RootStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: "This week",
        }}
      />
      <RootStack.Screen
        name="Shopping"
        component={ShoppingList}
        options={{
          title: "Shopping List",
        }}
      />

      <RootStack.Screen
        name="Planner"
        component={WeekPlanner}
        options={{
          title: "Week Planner",
        }}
      />
      <RootStack.Screen
        name="Recipes"
        component={Recipes}
        options={{
          title: "Recipes",
        }}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
