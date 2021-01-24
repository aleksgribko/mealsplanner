import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import ButtonGeneral from "../../Shared/ButtonGeneral";
import { colors } from "../../../globalStyle/variables";
import { useNavigation } from "@react-navigation/native";

const image = require("../../../assets/hello_background.jpg");

const AuthScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>Welcome to the Meals Planner!</Text>
        <View style={styles.actions}>
          <ButtonGeneral
            variant={"solid"}
            text="SIGN UP"
            onPress={() => navigation.navigate("SignUpScreen")}
          />
          <ButtonGeneral
            variant={"solid"}
            text="LOG IN"
            onPress={() => navigation.navigate("LogInScreen")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    color: "white",
    paddingBottom: 30,
    fontSize: 20,
  },
  actions: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
