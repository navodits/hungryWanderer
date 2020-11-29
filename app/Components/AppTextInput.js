import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../../config/colors";
import Icon from "./Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, color, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          color={color}
          size={20}
        />
      )}
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.grey,
    borderRadius: 20,
    height: 45,
    margin: 10,
    padding: 10,
  },
  icon: {
    margin: 10,
    alignSelf: "center",
  },
  text: {
    marginHorizontal: 10,
    width: "100%",
  },
});

export default AppTextInput;
