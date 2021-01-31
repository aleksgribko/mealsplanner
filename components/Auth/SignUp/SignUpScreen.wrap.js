import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import SignUpScreen from "./SignUpScreen";
import { connect } from "react-redux";
import { signUp } from "../auth.actions";

const SignUpScreenWrap = ({ signUpAction }) => {
  const [userEntries, setUserEntries] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [hasAllEntries, setHasAllEntries] = useState(false);

  useEffect(() => {
    if (
      userEntries.name.length &&
      userEntries.email.length &&
      userEntries.password.length &&
      userEntries.confirmPassword.length
    ) {
      setHasAllEntries(true);
    } else {
      setHasAllEntries(false);
    }
  }, [userEntries]);

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
      signUpAction={signUpAction}
      hasAllEntries={hasAllEntries}
      handleSignUp={handleSignUp}
    />
  );
};

const actionCreators = {
  signUpAction: signUp,
};

export default connect(null, actionCreators)(SignUpScreenWrap);
