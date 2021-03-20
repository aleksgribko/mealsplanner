import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from 'react-native'
import stylesheet from "./style";
import ButtonGeneral from "../Shared/ButtonGeneral";
import InputBox from "../Shared/InputField";

const styles = StyleSheet.create(stylesheet);

const AddRecipeModal = ({
  setShowAddRecipeModal,
  handleChangeInput,
  userRecipeInput,
  categories,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.overlayWrap}>
      <Text style={styles.overlayTitle}>Add new recipe</Text>
      <InputBox
        info="Recipe name"
        variant={"grey"}
        value={userRecipeInput.name}
        onChangeText={(text) => handleChangeInput("name", text)}
      />

      <InputBox
        info="Recipe description"
        variant={"grey"}
        value={userRecipeInput.description}
        onChangeText={(text) => handleChangeInput("description", text)}
      />
      <InputBox
        info="Number of people"
        variant={"grey"}
        maxLength={2}
        value={userRecipeInput.numberOfPpl}
        onChangeText={(text) => handleChangeInput("numberOfPpl", text)}
      />
      {/* <Picker
        selectedValue={userRecipeInput.category?.name || ""}
        onValueChange={(itemValue) => handleChangeInput("category", itemValue)}
      >
        {categories.map((item, ind) => (
          <Picker.Item key={ind} label={item.name} value={item} />
        ))}
      </Picker> */}

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <View style={styles.overlayActionWrap}>
        <ButtonGeneral
          text={"Save"}
          variant={"solid"}
          onPress={() => handleAddRecipe()}
        />
        <ButtonGeneral
          text={"Cancel"}
          variant={"red"}
          onPress={() => setShowAddRecipeModal(false)}
        />
      </View>
    </View>
  );
};

export default AddRecipeModal;
