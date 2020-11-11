import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Button,
  Vibration,
  Platform,
  TouchableOpacity,
} from "react-native";
import foodPic from "./assets/food.jpg";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./components/WelcomeScreen";
import ShoppingList from "./components/ShoppingList";
import WeekPlanner from "./components/WeekPlanner";
import Recepies from "./components/Recepies";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
// import Constants from "expo-constants";

const Stack = createStackNavigator();

export default function App() {
  const [state, setState] = useState({
    expoPushToken: "",
    notification: {},
  });

  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert("Failed to get push token for push notification!");
      return;
    }
    console.log(finalStatus);
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    setState({ expoPushToken: token });

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
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
         <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "This week",
          }}
        />
        <Stack.Screen
          name="Shopping"
          component={ShoppingList}
          options={{
            title: "Shopping List",
          }}
        />
       
        <Stack.Screen
          name="Planner"
          component={WeekPlanner}
          options={{
            title: "Week Planner",
          }}
        />
        <Stack.Screen
          name="Recepies"
          component={Recepies}
          options={{
            title: "Recepies",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
