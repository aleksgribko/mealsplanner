import React, { useEffect } from "react";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import {
  getActionFromState,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFamily } from "../redux/shared/actions";

const Navigator = ({ getFamilyAction }) => {
  const user = useSelector((state) => state.authentication.user);
  const family = useSelector((state) => state.globalReducers.family);

  console.log(family);

  useEffect(() => {
    user && getFamilyAction(user.familyId);
  }, [user]);

  const MainStack = createStackNavigator();
  const AuthStack = createStackNavigator();

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

const actionCreators = {
  getFamilyAction: getFamily,
};

export default connect(null, actionCreators)(Navigator);
