import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import InputBox from "../../Shared/InputField";
import styleSheet from "./style";
import ButtonGeneral from "../../Shared/ButtonGeneral";
import moment from "moment";

const image = require("../../../assets/hello_background.jpg");

const SignUpScreen = ({
  handleChangeEntry,
  handleSignUp,
  userEntries,
  hasAllEntries,
  setIsDatePickerVisible,
  isDatePickerVisible,
}) => {
  return (
    <View style={styles.wrap}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>A few things about you</Text>
          <InputBox
            info="First Name"
            variant={"grey"}
            value={userEntries.firstName}
            onChangeText={(data) => handleChangeEntry(data, "firstName")}
          />
          <InputBox
            info="User Name"
            variant={"grey"}
            value={userEntries.userName}
            onChangeText={(data) => handleChangeEntry(data, "userName")}
          />
          <InputBox
            info="Email"
            variant={"grey"}
            value={userEntries.email}
            onChangeText={(data) => handleChangeEntry(data, "email")}
          />

          <InputBox
            info="Password"
            variant={"grey"}
            value={userEntries.password}
            onChangeText={(data) => handleChangeEntry(data, "password")}
          />
          <InputBox
            info="Confirm Password"
            variant={"grey"}
            value={userEntries.confirmPassword}
            onChangeText={(data) => handleChangeEntry(data, "confirmPassword")}
          />
          {/* TODO: disable button if !hasAllEntries */}
          <ButtonGeneral
            variant={"solid"}
            text="SIGN UP"
            onPress={handleSignUp}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create(styleSheet);
