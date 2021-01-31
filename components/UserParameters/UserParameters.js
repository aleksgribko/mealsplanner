import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../../globalStyle/variables";
import styleSheet from "./style";
import ButtonGeneral from "../Shared/ButtonGeneral";
import InputBox from "../Shared/InputField";

const UserParameters = ({
  user,
  family,
  setFamilyName,
  familyName,
  handleCreateFamily,
}) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.iconNameWrap}>
        <View style={styles.circleAccount}>
          <Text style={styles.nameAbb}>AG</Text>
        </View>
        <Text style={styles.name}>
          {user.name} {family?.name}
        </Text>
      </View>
      <View style={styles.pesonalInfoSectionWrap}>
        <Text style={styles.sectionTitle}>Personal information</Text>
        <View style={styles.section}>
          {/* <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Phone Nuber</Text>
            <Text style={styles.sectionText}>+33 7 78 43 55 58</Text>
          </View> */}
          <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Email</Text>
            <Text style={styles.sectionText}>alezh89@gmail.com</Text>
          </View>
        </View>
      </View>
      {family ? (
        <View style={styles.pesonalInfoSectionWrap}>
          <Text style={styles.sectionTitle}>Family</Text>
          <View style={styles.section}>
            <View style={styles.subSection}>
              <Text style={styles.sectionSubtitle}>Name</Text>
              <Text style={styles.sectionText}>Gribko</Text>
            </View>
            <View style={styles.subSection}>
              <Text style={styles.sectionSubtitle}>Members</Text>
              <Text style={styles.sectionText}>Lucie</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text>No family</Text>
          <View style={styles.inputWrap}>
            <InputBox
              info="Family Name"
              variant={"grey"}
              value={familyName}
              onChangeText={(text) => setFamilyName(text)}
            />
            <ButtonGeneral
              variant={"solid"}
              text="Add Family"
              onPress={handleCreateFamily}
            />
          </View>
        </View>
      )}

      {/* <View style={styles.buttonsWrap}>
        <ButtonGeneral
          variant={"solid-color1"}
          text="Edit"
          thin={true}
          fontSize={20}
          horizontalMultiplier={2}
          onPress={handleLogOut}
          marginVertical={10}
        />
        <ButtonGeneral
          variant={"solid-color1"}
          text="Log out"
          fontSize={14}
          thin={true}
          horizontalMultiplier={1}
          onPress={handleLogOut}
          marginVertical={10}
        />
      </View> */}
    </View>
  );
};

export default UserParameters;

const styles = StyleSheet.create(styleSheet);
