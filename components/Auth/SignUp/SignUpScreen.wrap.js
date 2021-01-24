import React, { useState } from "react";
import { View, Text } from "react-native";
import SignUpScreen from "./SignUpScreen";
import { connect } from "react-redux";
import { signUp } from "../auth.actions";

const SignUpScreenWrap = ({ signUpAction }) => {
  const [userEntries, setUserEntries] = useState({
    firstName: "",
    userName: "",
    email: "",
    birthday: new Date(),
    password: "",
    confirmPassword: "",
  });
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [hasAllEntries, setHasAllEntries] = useState(false);

  const handleChangeEntry = (data, type) => {
    setUserEntries({
      ...userEntries,
      [type]: data,
    });
  };

  const handleSignUp = () => {
    signUpAction(userEntries);
  };

  return (
    <SignUpScreen
      handleChangeEntry={handleChangeEntry}
      userEntries={userEntries}
      handleSignUp={handleSignUp}
      hasAllEntries={hasAllEntries}
      isDatePickerVisible={isDatePickerVisible}
      setIsDatePickerVisible={setIsDatePickerVisible}
    />
  );
};

const actionCreators = {
  signUpAction: signUp,
};

export default connect(null, actionCreators)(SignUpScreenWrap);
