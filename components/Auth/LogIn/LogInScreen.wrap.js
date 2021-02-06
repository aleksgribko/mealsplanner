import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import LogInScreen from "./LogInScreen";
import { logIn } from "../auth.actions";

const LogInScreenWrap = ({ logInAction }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    logInAction(email, password);
  };

  return (
    <LogInScreen
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogIn={handleLogIn}
    />
  );
};

const actionCreators = {
  logInAction: logIn,
};

export default connect(null, actionCreators)(LogInScreenWrap);
