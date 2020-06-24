import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import foodPic from "./assets/food.jpg";
import Navigation from "./Navigation";
import Layout from "./Layout";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <Image source={foodPic} style={styles.imgFood} />
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
    </Layout>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imgFood: { width: "100%", height: 250, marginBottom: 10 },
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
});
