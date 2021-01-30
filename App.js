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
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import Navigator from "./navigator/Navigator";
// import Constants from "expo-constants";

const store = configureStore();

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
    let token = await Notifications.getExpoPushTokenAsync();
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
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
