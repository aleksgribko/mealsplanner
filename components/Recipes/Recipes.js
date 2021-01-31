import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import RecipesExpandable from "./RecipesExpandable";
import { connect } from "react-redux";

const Recipes = ({ navigation, recipes, mealTypes }) => {
  return (
    <View style={styles.wrap}>
      <ScrollView
        style={{
          display: "flex",
          marginTop: 50,
          marginBottom: 80,
          width: "100%",
        }}
      >
        <RecipesExpandable />

        <View style={{ display: "flex", alignItems: "center", marginTop: 15 }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("You have started a new week!");
            }}
            style={styles.buttonAdd}
          >
            <Text style={styles.buttonAddText}>Add new recipe</Text>
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
    </View>
  );
};

//   const mapDispatchToProps = { increment, decrement, reset }

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    recipes: state.recipes.recipes,
    mealTypes: state.recipes.mealTypes,
  };
};

export default connect(mapStateToProps)(Recipes);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  buttonAdd: {
    backgroundColor: "#cd0000",
    padding: 20,
    borderRadius: 5,
    marginBottom: 5,
    width: 200,
  },
  buttonAddText: { fontSize: 20, color: "#fff" },
});
