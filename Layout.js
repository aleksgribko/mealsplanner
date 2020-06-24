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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerMain: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
