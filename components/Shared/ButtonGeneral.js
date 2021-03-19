import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../globalStyle/variables";

export default function ButtonGeneral({
  //   size,
  //   scale,
  //   disableShadow = false,
  variant = "default",
  //   style,
  //   textStyle,
  onPress,
  text = "Button",
  //   ...props
}) {
  const buttonStyle = styles.variant[variant];

  //   const shadow = !disableShadow && variant !== 'underline' ? styles.boxShadow : {};
  //   const transform = scale ? { transform: [{ scale }] } : {};

  let _containerStyle = {
    ...defaultStyle.container, // Default button style
    ...buttonStyle.container, // Variant style
    // ...style, // User specific style
    // ...shadow,
    // ...transform,
  };

  //   if (props.disabled) {
  //     _containerStyle = {
  //       ..._containerStyle,
  //       ...styles.disabled,
  //     };
  //   }

  const _textStyle = {
    ...defaultStyle.text,
    fontSize: 12, // props.size
    ...buttonStyle.text,
    // ...textStyle,
  };

  return (
    <TouchableOpacity style={_containerStyle} onPress={onPress}>
      <Text style={_textStyle}>{text}</Text>
    </TouchableOpacity>
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

// styles.variant['solid-dark'] = {
//   container: {
//     backgroundColor: '#002249',
//     borderRadius: 33,
//     paddingHorizontal: 30,
//     paddingVertical: 12,
//   },
//   text: {
//     color: 'white',
//     fontFamily: theme.font.semi,
//   },
// };

// styles.variant['outline'] = {
//   container: {
//     backgrondColor: 'white',
//     borderRadius: 33,
//     borderWidth: 1,
//     borderColor: colors.primary,
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     backgroundColor: 'white',
//   },
//   text: {
//     fontFamily: theme.font.semi,
//     color: colors.primary,
//   },
// };

styles.variant["solid"] = {
  container: {
    borderRadius: 33,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.color1,
  },
  text: { color: "white" },
};

styles.variant["red"] = {
  container: {
    borderRadius: 33,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'red',
  },
  text: { color: "white" },
};

styles.variant["grey"] = {
  container: {
    borderRadius: 33,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "grey",
  },
  text: { color: "white" },
};

// styles.variant['ghost'] = {
//   container: {
//     padding: 10,
//   },
//   text: {
//     color: 'white',
//     textDecorationLine: 'underline',
//     fontFamily: theme.font.regular,
//   },
// };

// styles.variant['form'] = {
//   container: {
//     padding: 16,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 33,
//   },
//   text: { color: colors.primary, fontFamily: theme.font.semi },
// };

// styles.variant['underline'] = {
//   container: {
//     paddingBottom: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: { fontFamily: theme.font.regular, fontSize: 12, textDecorationLine: 'underline' },
// };
