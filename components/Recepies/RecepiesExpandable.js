import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  UIManager,
  Platform,
  LayoutAnimation,
} from "react-native";
import { recepies, categories } from "../../dummyData";

const RecepiesExpandable = ({ addDish }) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [listDataSource, setListDataSource] = useState([...categories]);

  useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array.map((value, placeindex) =>
      value.id === index
        ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
        : (array[placeindex]["isExpanded"] = false)
    );
    setListDataSource(array);
  };

  return (
    <>
      {listDataSource.map((cat, key) => {
        return (
          <View key={key}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                updateLayout(cat.id);
              }}
              style={styles.header}
            >
              <Text style={styles.headerText}>{cat.name}</Text>
            </TouchableOpacity>
            <View
              style={{
                height: cat.isExpanded ? null : 0,
                overflow: "hidden",
              }}
            >
              {recepies
                .filter((res) => res.category_id === cat.id)
                .map((item, key) => {
                  return (
                    <TouchableOpacity
                      key={key}
                      style={styles.content}
                      onPress={() => Alert.alert("val: " + item.name)}
                    >
                      <Text style={styles.text}>
                        {key + 1}. {item.name}
                      </Text>
                      {addDish ? (
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              Alert.alert("You have started a new week!");
                            }}
                            style={styles.buttonAddRes}
                          >
                            <Text style={styles.buttonAddResText}>Add</Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                      <View style={styles.separator} />
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
        );
      })}
    </>
  );
};

export default RecepiesExpandable;

const styles = StyleSheet.create({
  imgFood: { width: "100%", height: 250, marginBottom: 10 },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  textMain: { fontSize: 16 },
  buttonAdd: {
    backgroundColor: "#cd0000",
    padding: 20,
    borderRadius: 5,
    marginBottom: 5,
    width: 200,
  },
  buttonAddText: { fontSize: 20, color: "#fff" },

  header: {
    backgroundColor: "#F5FCFF",
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
  },
  buttonAddRes: {
    backgroundColor: "#cd0000",
    padding: 5,
    borderRadius: 5,
    width: 100,
  },
  buttonAddResText: { fontSize: 14, color: "#fff" },
});
