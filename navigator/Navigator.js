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
import { restoreSession } from "../components/Auth/auth.actions";
import Loader from "../components/Shared/Loader.js";
import { getData } from "../services/storage";

const Navigator = ({ getFamilyAction, restoreSessionAction }) => {
  const user = useSelector((state) => state.authentication.user);
  const family = useSelector((state) => state.globalReducers.family);
  const isLoading = useSelector((state) => state.globalReducers.isLoading);

  useEffect(() => {
    user?.familyId && !family && getFamilyAction(user.accessToken);
  }, [user]);

  useEffect(() => {
    const checkStorage = async () => {
      const userData = await getData("user");

      if (userData) {
        restoreSessionAction(JSON.parse(userData));
      }
    };

    !user && checkStorage();
  }, []);

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
      {isLoading ? <Loader /> : null}
    </NavigationContainer>
  );
};

const actionCreators = {
  getFamilyAction: getFamily,
  restoreSessionAction: restoreSession,
};

export default connect(null, actionCreators)(Navigator);
