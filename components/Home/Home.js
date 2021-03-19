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
import stylesheet from "./style";
import { useSelector } from "react-redux";

const WelcomeScreen = ({ navigation }) => {

  const user = useSelector((state) => state.authentication.user);


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

  if(!user) return <View></View>

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
          {`Hi, ${user.name}, this is what is planned for today`}
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

const styles = StyleSheet.create(stylesheet);
