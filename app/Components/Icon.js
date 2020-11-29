import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../config/colors";

function Icon({
  name,
  color,
  iconType = "MaterialCommunityIcons",
  iconColor = colors.white,
  size = 20,
}) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {iconType === "Ionicons" && (
        <Ionicons name={name} size={size} color={iconColor} />
      )}
      {iconType === "FontAwesome5" && (
        <FontAwesome5 name={name} size={size} color={iconColor} />
      )}
      {iconType === "MaterialCommunityIcons" && (
        <MaterialCommunityIcons name={name} size={size} color={iconColor} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default Icon;
