import React, { useState } from "react";
import { View, Text } from "react-native";
import UserParameters from "./UserParameters";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { createFamily } from "./parameters.actions";
import { logOut } from "../Auth/auth.actions";
import { getFamily } from "../../redux/shared/actions";

const UserParametersWrap = ({
  createFamilyAction,
  logOutAction,
  getFamilyAction,
}) => {
  const [familyName, setFamilyName] = useState("");
  const user = useSelector((state) => state.authentication.user);
  const family = useSelector((state) => state.globalReducers.family);

  if (!user) return <Text>Loading</Text>;
  console.log("USER!!!!!!!!!!!!!!!!", user);
  console.log("FAMILY", family);

  const handleCreateFamily = async () => {
    const res = await createFamilyAction(familyName);
    console.log(res);
    if (res?.id) getFamilyAction();
  };

  const handleLogOut = () => {
    logOutAction();
  };

  return (
    <UserParameters
      user={user}
      family={family}
      setFamilyName={setFamilyName}
      familyName={familyName}
      handleCreateFamily={handleCreateFamily}
      handleLogOut={handleLogOut}
    />
  );
};

const actionCreators = {
  createFamilyAction: createFamily,
  logOutAction: logOut,
  getFamilyAction: getFamily,
};

export default connect(null, actionCreators)(UserParametersWrap);
