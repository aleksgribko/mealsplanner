import * as React from "react";
import { Text, TouchableOpacity, TextInput, View } from "react-native";
import { colors } from "../../globalStyle/variables";
import { Platform } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function InputBox({
  //   size,
  //   scale,
  //   disableShadow = true,
  variant = "default",
  //   style,
  //   textStyle,
  // text,
  value,
  onChangeText,
  editable = true,
  //   secret = false,
  info = "Info",
  //   phoneNumber = false,
  ...props
}) {
  const inputStyle = styles.variant[variant];
  //   const shadow = !disableShadow ? styles.boxShadow : {};
  //   const transform = scale ? { transform: [{ scale }] } : {};
  //   const [hide, setHide] = React.useState(true);

  let _containerStyle = {
    ...defaultStyle.container, // Default button style
    ...inputStyle.container, // Variant style
    // ...style, // User specific style
    // ...shadow,
    // ...transform,
  };
  const _textStyle = {
    ...defaultStyle.text,
    ...inputStyle.text,
    // ...textStyle,
    // fontSize: size,
  };

  if (props.disabled) {
    _containerStyle = {
      ..._containerStyle,
      //   ...styles.disabled,
    };
  }

  return (
    <>
      {info ? <Text style={inputStyle.info}>{info}</Text> : <></>}
      <View style={_containerStyle}>
        {/* {phoneNumber ? <Text style={inputStyle.phone}>+33</Text> : <></>} */}
        <TextInput
          // placeholder={'placeholder'}
          keyboardType={"default"}
          //   secureTextEntry={secret && hide}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          style={_textStyle}
          autoCapitalize="none"
          {...props}
        />
        {/* {secret ? (
          <TouchableOpacity
            style={{justifyContent: 'flex-end'}}
            onPress={() => setHide(!hide)}>
            <Icon size={24} color={inputStyle.eye.color} name={'eye'} />
          </TouchableOpacity>
        ) : (
          <></>
        )} */}
      </View>
    </>
  );
}

const styles = {
  variant: {
    default: {
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        textAlign: "center",
        // backgrondColor: 'red',
      },
    },
  },
  disabled: {
    opacity: 0.6,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

const defaultStyle = styles.variant["default"];

styles.variant["grey"] = {
  container: {
    height: 40,
    borderRadius: 33,
    paddingHorizontal: 16,
    backgroundColor: Platform.OS === "ios" ? "rgb(255, 160, 160)" : "#00000011",
    color: colors.color1,
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
  },
  text: {
    flex: 1,
    textAlign: "left",
    color: colors.color1,
  },
  eye: {
    color: colors.color1,
  },
  info: {
    color: colors.color2,
    fontSize: 13,
    paddingLeft: 10,
  },
};
