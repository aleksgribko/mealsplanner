import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import foodPic from "../../assets/food.jpg";
import { abs } from "react-native-reanimated";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";

const WelcomeScreen = ({ navigation }) => {
  const d = new Date();
  const n = d.getDay();

  let dayOfTheWeek;

  switch (n) {
    case 1:
      dayOfTheWeek = "Monday";
      break;
    case 2:
      dayOfTheWeek = "Tuesday";
      break;
    case 3:
      dayOfTheWeek = "Wednesday";
      break;
    case 4:
      dayOfTheWeek = "Thursday";
      break;
    case 5:
      dayOfTheWeek = "Friday";
      break;
    case 6:
      dayOfTheWeek = "Saturday";
      break;
    case 0:
      dayOfTheWeek = "Sunday";
      break;
    default:
      break;
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.img_wrap}>
        <Image source={foodPic} style={styles.imgFood} />
        <View style={styles.text_wrap}>
          <Text style={styles.week_text}>{dayOfTheWeek}</Text>
        </View>
      </View>
      <View style={styles.wrap_main}>
        <Text style={styles.textMain}>
          Hi, Sasha, this is what is planned for today
        </Text>

        <ScrollView
          style={{ display: "flex", marginTop: 20, marginBottom: 20 }}
        >
          <View style={styles.cardDay}>
            {["Breakfast", "Lunch", "Dinner"].map((meal, key) => {
              return (
                <View
                  key={key}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.mealTimeText}>{meal}</Text>
                  <View style={styles.divider} />
                  <View style={styles.dishCompleted}>
                    <AntDesign name="checkcircleo" size={20} color="black" />
                    <Text style={styles.mealText}>Omlet</Text>
                  </View>
                  <View style={styles.dishMissing}>
                    <MaterialIcons
                      name="error-outline"
                      size={25}
                      color="black"
                    />
                    <Text style={styles.mealText}>Lasania</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* <Text style={styles.instructions}>
          Click Start a new week to clear the data
        </Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("You have started a new week!");
          }}
          style={styles.buttonStart}
        >
          <Text style={styles.buttonStartText}>Start a new week</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  img_wrap: {
    position: "relative",
    marginBottom: 10,
    width: "100%",
    // height: 250,
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  imgFood: { position: "absolute", left: 0, width: "100%", height: 250 },
  text_wrap: { backgroundColor: "rgba(256, 256, 256, 0.8)", padding: 10 },
  week_text: {
    fontSize: 30,
    color: "#cd0000",
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  textMain: { fontSize: 16 },
  buttonStart: { backgroundColor: "#cd0000", padding: 20, borderRadius: 5 },
  buttonStartText: { fontSize: 20, color: "#fff" },
  wrap_main: { flex: 2 },
  divider: {
    width: 100,
    borderTopColor: "whitesmoke",
    borderStyle: "solid",
    borderTopWidth: 2,
    marginTop: 0,
    marginBottom: 10,
  },
  mealTimeText: {
    marginTop: 10,
  },
  dishCompleted: {
    padding: 10,
    backgroundColor: "#99ffbb",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dishMissing: {
    padding: 10,
    backgroundColor: "#ff9999",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
