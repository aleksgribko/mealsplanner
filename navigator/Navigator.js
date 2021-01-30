import React from "react";
import { View, Text } from "react-native";
import AuthNavigator from "../components/ScreenStacks/AuthNavigator";
import MainNavigator from "../components/ScreenStacks/MainNavigator";

import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Navigator = () => {
  const user = useSelector((state) => state.authentication.user);

  const MainStack = createStackNavigator();
  const AuthStack = createStackNavigator();

  console.log("USER", user);

  return (
    <NavigationContainer>
      {user ? (
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen
            name="MainScreens"
            component={MainNavigator}
            // initialParams={{...props}}
          />
        </MainStack.Navigator>
      ) : (
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <AuthStack.Screen
            name="AuthScreen"
            component={AuthNavigator}
            // initialParams={{...props}}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
