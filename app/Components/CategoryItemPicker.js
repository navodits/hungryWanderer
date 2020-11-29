import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryItemPicker = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        iconType={item.iconType}
        name={item.icon}
        size={30}
        iconColor={item.bgcolor}
        color={colors.black}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: { textAlign: "center" },
});

export default CategoryItemPicker;
