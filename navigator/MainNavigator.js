import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../components/Home/Home.wrap";
import ShoppingList from "../components/ShoppingList/ShoppingList.wrap";
import WeekPlanner from "../components/WeekPlanner/WeekPlanner.wrap";
// import Recipes from "../components/Recipes/Recipes";
import UserParameters from "../components/UserParameters/UserParameters.wrap";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName={"Welcome"}
      screenOptions={({ route }) => ({
        backBehavior: "none",
        tabBarIcon: ({ focused, color, size }) => {
          // let iconName;

          switch (route.name) {
            case "User":
              // iconName = focused ? "ios-home" : "ios-home";
              return (
                <MaterialIcons name={"person"} size={size} color={color} />
              );
            case "Shopping":
              // iconName = focused ? "md-cart" : "md-cart";
              return <Ionicons name={"md-cart"} size={size} color={color} />;
            case "Planner":
              // iconName = focused ? "ios-calendar" : "ios-calendar";
              return (
                <Ionicons name={"ios-calendar"} size={size} color={color} />
              );
            case "Recipes":
              // iconName = focused ? "fast-food" : "fast-food";
              return (
                <MaterialCommunityIcons
                  name={"food-variant"}
                  size={size}
                  color={color}
                />
              );
            default:
              // iconName = focused ? "ios-person-circle" : "ios-person-circle";
              return <Entypo name={"home"} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "black",
        showLabel: false,
      }}
    >
      <TabStack.Screen name="Shopping" component={ShoppingList} />
      <TabStack.Screen name="Planner" component={WeekPlanner} />
      <TabStack.Screen name="Welcome" component={WelcomeScreen} />
      <TabStack.Screen name="Recipes" component={WelcomeScreen} />
      <TabStack.Screen name="User" component={UserParameters} />
    </TabStack.Navigator>
  );
};

export default MainNavigator;
