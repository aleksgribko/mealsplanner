import React from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./Navigation";

const Layout = ({ children, navigation }) => {
  return (
    <View style={styles.containerWrap}>
      <Navigation navigation={navigation} />

      <View style={styles.containerMain}>{children}</View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  containerWrap: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "100%",
  },
  containerMain: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
