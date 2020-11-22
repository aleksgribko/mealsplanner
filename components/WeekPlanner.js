import React, { useState } from "react";
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
import Navigation from "./Navigation";
import Layout from "./Layout";
import RecepiesExpandable from "./Recepies/RecepiesExpandable";
import moment from 'moment'

const WeekPlanner = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout navigation={navigation}>
      <ScrollView style={{ display: "flex", marginTop: 50, marginBottom: 80 }}>
        {[
          moment(),
          moment().add(1, 'day'),
          moment().add(2, 'day'),
          moment().add(3, 'day'),
          moment().add(4, 'day'),
          moment().add(5, 'day'),
          moment().add(6, 'day')
        ].map((day, key) => {
          return (
            <View key={key} style={styles.cardDay}>
              <Text style={styles.dayTitle}>{day.format('dddd, DD.MM.YYYY')}</Text>
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
                        setModalVisible(true);
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
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Pick a dish</Text>
              <RecepiesExpandable />

              <TouchableHighlight
                style={styles.buttonClose}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.buttonAddText}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    minWidth: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#cd0000",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
