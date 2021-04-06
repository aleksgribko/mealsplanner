import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Accordion from "react-native-collapsible/Accordion";

const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});

const MealsAccordion = ({
  setActiveCategory,
  activeCategory,
  meals,
  categories,
  handleMealClick,
}) => {
  if (!categories) return <View />;

  const renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.name}</Text>
      </View>
    );
  };

  const renderContent = (section) => {
    const pickedCategoryId = section._id;
    const filteredMeals = meals
      ? meals.filter((meal) => meal.category === pickedCategoryId)
      : [];
    // console.log(filteredMeals)
    if (!filteredMeals?.length)
      return (
        <Text style={{ textAlign: "center", padding: 10 }}>
          No meals in this category
        </Text>
      );
    return (
      <View>
        {filteredMeals.map((meal, ind) => (
          <TouchableOpacity
            style={styles.content}
            key={ind}
            onPress={() => handleMealClick(meal)}
          >
            <Text>{meal.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const updateSections = (activeSections) => {
    console.log(activeSections);
    setActiveCategory(activeSections.includes(undefined) ? [] : activeSections);
  };

  return (
    <Accordion
      sections={categories}
      expandMultiple={false}
      touchableComponent={TouchableOpacity}
      activeSections={activeCategory || []}
      renderHeader={renderHeader}
      duration={400}
      renderContent={renderContent}
      onChange={updateSections}
    />
  );
};

export default MealsAccordion;
