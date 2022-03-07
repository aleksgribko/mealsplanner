import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const Loader = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Loader;
