import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Navigation from "./Navigation";
import Layout from "./Layout";
import * as Calendar from "expo-calendar";

const WeekPlanner = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <ScrollView style={{ display: "flex", marginTop: 50, marginBottom: 80 }}>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day, key) => {
          return (
            <View key={key} style={styles.cardDay}>
              <Text style={styles.dayTitle}>{day}</Text>
              {["Breakfast", "Lunch", "Dinner"].map((meal, key) => {
                return (
                  <View
                    key={key}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.mealText}>{meal}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert("You have started a new week!");
                      }}
                      style={styles.buttonAdd}
                    >
                      <Text style={styles.buttonAddText}>Add</Text>
                    </TouchableOpacity>
                    {/* <Text style={styles.mealText}>bla</Text> */}
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </Layout>
  );
};

export default WeekPlanner;

const styles = StyleSheet.create({
  cardDay: {
    flex: 1,
    minWidth: 300,
    minHeight: 150,
    backgroundColor: "#F5F5F5",
    zIndex: 4,
    margin: 10,
    borderRadius: 5,
  },
  dayTitle: {
    color: "#888",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
    padding: 10,
  },
  mealText: {
    color: "#888",
    fontSize: 14,
    padding: 10,
  },
  buttonAdd: {
    backgroundColor: "#cd0000",
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  buttonAddText: { fontSize: 14, color: "#fff" },
});
