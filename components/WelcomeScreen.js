import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import foodPic from "../assets/food.jpg";
import Navigation from "./Navigation";
import Layout from "./Layout";
import { abs } from "react-native-reanimated";

const WelcomeScreen = ({ navigation }) => {
  const d = new Date();
  const n = d.getDay();

  let dayOfTheWeek;

  switch (n) {
    case 1:
      dayOfTheWeek = "Monday";
      break;
    case 2:
      dayOfTheWeek = "Tuesday";
      break;
    case 3:
      dayOfTheWeek = "Wednesday";
      break;
    case 4:
      dayOfTheWeek = "Thursday";
      break;
    case 5:
      dayOfTheWeek = "Friday";
      break;
    case 6:
      dayOfTheWeek = "Saturday";
      break;
    case 7:
      dayOfTheWeek = "Sunday";
      break;
    default:
      break;
  }

  return (
    <Layout navigation={navigation} style={styles.wrap}>
      <View style={styles.img_wrap}>
        <Image source={foodPic} style={styles.imgFood} />
        <View style={styles.text_wrap}>
          <Text style={styles.week_text}>{dayOfTheWeek}</Text>
        </View>
      </View>
      <View style={styles.wrap_main}>
        <Text style={styles.textMain}>Welcome to the food planner!</Text>
        <Text style={styles.instructions}>
          Click Start a new week to clear the data
        </Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("You have started a new week!");
          }}
          style={styles.buttonStart}
        >
          <Text style={styles.buttonStartText}>Start a new week</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  img_wrap: {
    position: "relative",
    marginBottom: 10,
    width: "100%",
    // height: 250,
    flex: 1,
    alignItems: "center",
    flexDirection: 'column',
    justifyContent: "center",
  },
  imgFood: { position: "absolute", left: 0, width: "100%", height: 250 },
  text_wrap: {backgroundColor: 'rgba(256, 256, 256, 0.8)', padding: 10},
  week_text: {
    fontSize: 30,
    color: "#cd0000"
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  textMain: { fontSize: 16 },
  buttonStart: { backgroundColor: "#cd0000", padding: 20, borderRadius: 5 },
  buttonStartText: { fontSize: 20, color: "#fff" },
  wrap_main: { flex: 2 },
});
