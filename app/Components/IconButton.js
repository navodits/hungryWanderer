import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconButton({ icon, bgColor, onPress, iconColor }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        style={styles.icon}
        name={icon}
        color={iconColor}
        size={25}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
    width: 60,
    height: 25,
  },
  icon: {
    alignSelf: "center",
  },
});

export default IconButton;
