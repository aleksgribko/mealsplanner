import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Layout from "../Layout";
import RecepiesExpandable from "./RecepiesExpandable";
import { connect } from 'react-redux'

const Recepies = ({ navigation, recipes, mealTypes }) => {

  console.log(recipes, mealTypes);
  return (
    <Layout navigation={navigation}>
      <ScrollView
        style={{
          display: "flex",
          marginTop: 50,
          marginBottom: 80,
          width: "100%",
        }}
      >
        <RecepiesExpandable />

        <View style={{ display: "flex", alignItems: "center", marginTop: 15 }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("You have started a new week!");
            }}
            style={styles.buttonAdd}
          >
            <Text style={styles.buttonAddText}>Add new recepie</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("You have started a new week!");
            }}
            style={styles.buttonAdd}
          >
            <Text style={styles.buttonAddText}>Add new category</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

//   const mapDispatchToProps = { increment, decrement, reset }

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    recipes: state.recipes.recipes,
    mealTypes: state.recipes.mealTypes
  }
}

export default connect(mapStateToProps)(Recepies)

const styles = StyleSheet.create({
  buttonAdd: {
    backgroundColor: "#cd0000",
    padding: 20,
    borderRadius: 5,
    marginBottom: 5,
    width: 200,
  },
  buttonAddText: { fontSize: 20, color: "#fff" },
});
