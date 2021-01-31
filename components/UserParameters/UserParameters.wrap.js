import React, { useState } from "react";
import { View, Text } from "react-native";
import UserParameters from "./UserParameters";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { createFamily } from "./parameters.actions";

const UserParametersWrap = ({ createFamilyAction }) => {
  const [familyName, setFamilyName] = useState("");
  const user = useSelector((state) => state.authentication.user);
  const family = useSelector((state) => state.globalReducers.family);

  console.log(user);
  console.log(family);

  const handleCreateFamily = () => {
    createFamilyAction(user.id, familyName);
  };

  return (
    <UserParameters
      user={user}
      family={family}
      setFamilyName={setFamilyName}
      familyName={familyName}
      handleCreateFamily={handleCreateFamily}
    />
  );
};

const actionCreators = {
  createFamilyAction: createFamily,
};

export default connect(null, actionCreators)(UserParametersWrap);
