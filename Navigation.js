import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Navigation = ({ navigation }) => {
  return (
    <View style={styles.buttonsWrap}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>H</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Shopping")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Shopping list</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Planner")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Week Planner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recepies")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Recepies</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  homeIcon: { width: 14, height: 14 },
  buttonsWrap: {
    display: "flex",
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    backgroundColor: "#cd0000",
    zIndex: 5,
  },
  button: { padding: 14 },
  buttonText: { fontSize: 14, color: "white" },
});
