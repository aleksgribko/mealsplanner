import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import InputBox from "../../Shared/InputField";
import ButtonGeneral from "../../Shared/ButtonGeneral";

const image = require("../../../assets/hello_background.jpg");

const LogInScreen = ({
  email,
  setEmail,
  setPassword,
  password,
  handleLogIn,
}) => {
  return (
    <View style={styles.wrap}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.overlay}>
          {/* <Text style={styles.title}>LogIn</Text> */}

          <InputBox
            info="Email"
            variant={"grey"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputBox
            info="Password"
            variant={"grey"}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <ButtonGeneral
            variant={"solid"}
            text="LOG IN"
            onPress={handleLogIn}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    padding: 20,
    fontSize: 30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  overlay: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    width: "100%",
  },
});
