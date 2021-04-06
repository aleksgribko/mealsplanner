import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
// import RecipesExpandable from "../Recipes/RecipesExpandable";
import moment from "moment";
import stylesheet from "./style";
import MealsAccordion from "../Shared/MealsAccordion";

const WeekPlanner = ({
  navigation,
  getInitialCatMealsIngAction,
  handleAddMealToDay,
  user,
  setModalPickMealVisible,
  modalPickMealVisible,
  categories,
  meals,
  activeCategory,
  setActiveCategory,
  handleMealClick,
}) => {
  return (
    <View style={styles.wrap}>
      <Text
        style={{
          textAlign: "center",
          padding: 10,
          color: "white",
          fontSize: 16,
        }}
      >
        Add meals to the following 7 days
      </Text>
      <ScrollView>
        {[
          moment(),
          moment().add(1, "day"),
          moment().add(2, "day"),
          moment().add(3, "day"),
          moment().add(4, "day"),
          moment().add(5, "day"),
          moment().add(6, "day"),
        ].map((day, key) => {
          return (
            <View key={key} style={styles.cardDay}>
              <Text style={styles.dayTitle}>
                {day.format("dddd, DD.MM.YYYY")}
              </Text>
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
                        setModalPickMealVisible({
                          date: day._d,
                          meal,
                        });
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
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={Boolean(modalPickMealVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Pick a dish</Text>
              <MealsAccordion
                activeSections={activeCategory || []}
                meals={meals}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                handleMealClick={handleMealClick}
              />

              <TouchableHighlight
                style={styles.buttonClose}
                onPress={() => {
                  setModalPickMealVisible(!modalPickMealVisible);
                }}
              >
                <Text style={styles.buttonAddText}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default WeekPlanner;

const styles = StyleSheet.create(stylesheet);
