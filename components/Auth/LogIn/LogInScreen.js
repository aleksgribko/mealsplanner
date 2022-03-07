import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import InputBox from "../../Shared/InputField";
import ButtonGeneral from "../../Shared/ButtonGeneral";
import styleSheet from "../style";

const styles = StyleSheet.create(styleSheet);

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
          <Text style={styles.title}>LogIn</Text>

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

