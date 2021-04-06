import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import stylesheet from "./style";
import ButtonGeneral from "../Shared/ButtonGeneral";
import InputBox from "../Shared/InputField";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import measurements from "../../config/measurements";

const styles = StyleSheet.create(stylesheet);
// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height;

const AddRecipeModal = ({
  handleToggleRecipeModal,
  handleChangeInput,
  userRecipeInput,
  categories,
  handlePressAddIngredient,
  handleChangeIngredientInput,
  handleAddRecipe,
}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.overlayWrap}>
      <View style={{ ...styles.overlayInScroll, minHeight: windowHeight }}>
        {/* <View > */}
        <Text style={styles.overlayTitle}>Add new recipe</Text>
        <View style={styles.inputSectionWrap}>
          <InputBox
            info="Recipe name"
            variant={"grey"}
            value={userRecipeInput.name}
            onChangeText={(text) => handleChangeInput("name", text)}
          />
        </View>
        <View style={styles.inputSectionWrap}>
          <InputBox
            info="Recipe description"
            multiline={true}
            variant={"grey"}
            numberOfLines={4}
            value={userRecipeInput.description}
            onChangeText={(text) => handleChangeInput("description", text)}
          />
        </View>
        <View style={styles.inputSectionWrap}>
          <InputBox
            info="Number of people"
            variant={"grey"}
            maxLength={2}
            value={userRecipeInput.numberOfPpl}
            onChangeText={(text) => handleChangeInput("numberOfPpl", text)}
          />
        </View>
        <View style={styles.inputSectionWrap}>
          <Text>Pick category</Text>
          <Picker
            selectedValue={userRecipeInput.category?.name || categories[0].name}
            onValueChange={(itemValue) =>
              handleChangeInput("category", itemValue)
            }
          >
            {categories.map((item, ind) => {
              return <Picker.Item key={ind} label={item.name} value={item} />;
            })}
          </Picker>
        </View>
        <View style={styles.inputSectionWrap}>
          <Text>Pick ingredients</Text>
          {userRecipeInput.ingredients?.length
            ? userRecipeInput.ingredients.map((item, ind) => {
                return (
                  <View key={ind} style={styles.ingredientsInputs}>
                    <View style={{ width: "40%" }}>
                      <InputBox
                        info="name"
                        variant={"grey"}
                        value={item.name}
                        rounded={false}
                        onChangeText={(text) =>
                          handleChangeIngredientInput("name", ind, text)
                        }
                      />
                    </View>
                    <View style={{ width: "25%" }}>
                      <InputBox
                        info="quantity"
                        variant="grey"
                        value={item.quantity.toString()}
                        rounded={false}
                        onChangeText={(text) =>
                          handleChangeIngredientInput("quantity", ind, text)
                        }
                      />
                    </View>
                    <View style={{ width: "35%" }}>
                      <Picker
                        selectedValue={item.measurement || measurements[0]}
                        onValueChange={(text) =>
                          handleChangeIngredientInput("measurement", ind, text)
                        }
                      >
                        {measurements.map((item, ind) => {
                          return (
                            <Picker.Item key={ind} label={item} value={item} />
                          );
                        })}
                      </Picker>
                    </View>
                  </View>
                );
              })
            : null}
          <TouchableOpacity onPress={handlePressAddIngredient}>
            <Ionicons
              name={"ios-add"}
              size={20}
              color={"black"}
              style={{ padding: 10, width: "100%", textAlign: "center" }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.overlayActionWrap}>
          <ButtonGeneral
            text={"Save"}
            variant={"solid"}
            onPress={() => handleAddRecipe()}
          />
          <ButtonGeneral
            text={"Cancel"}
            variant={"red"}
            onPress={() => handleToggleRecipeModal(false)}
          />
        </View>
        {/* </View> */}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddRecipeModal;
