import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../components/Auth/AuthenticationType/AuthScreen.wrap";
import SignUpScreen from "../components/Auth/SignUp/SignUpScreen.wrap";
import LogInScreen from "../components/Auth/LogIn/LogInScreen.wrap";

const RootStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <RootStack.Navigator
      // screenOptions={navigationStyles.stackScreenOptions}
      initialRouteName="AuthScreen"
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
          headerShown: true,
        }}
        name="Sign Up"
        component={SignUpScreen}
        // initialParams={{...props}}
      />
      <RootStack.Screen
        options={{
          headerShown: true,
        }}
        name="Sign In"
        component={LogInScreen}
        // initialParams={{...props}}
      />
    </RootStack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
