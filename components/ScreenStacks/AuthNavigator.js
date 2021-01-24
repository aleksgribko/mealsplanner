import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthScreen from "../Auth/AuthenticationType/AuthScreen.wrap";
import SignUpScreen from "../Auth/SignUp/SignUpScreen.wrap";
import LogInScreen from "../Auth/LogIn/LogInScreen.wrap";

import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <RootStack.Navigator
      // screenOptions={navigationStyles.stackScreenOptions}
      initialRouteName={"AuthScreen"}
    >
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="AuthScreen"
        component={AuthScreen}
        // initialParams={{...props}}
      />
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUpScreen"
        component={SignUpScreen}
        // initialParams={{...props}}
      />
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="LogInScreen"
        component={LogInScreen}
        // initialParams={{...props}}
      />
    </RootStack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
