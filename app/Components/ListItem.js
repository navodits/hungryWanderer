import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "./Icon";
import colors from "../../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  name,
  color,
  title,
  subtitle,
  onPress,
  textColor = colors.white,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name={name} color={color} iconColor={colors.black} />
        <View style={styles.list}>
          <AppText>{title}</AppText>
          {subtitle && <AppText>{subtitle}</AppText>}
        </View>
        <MaterialCommunityIcons
          style={styles.icon}
          name="chevron-right"
          size={20}
          color={colors.black}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.grey,
    borderRadius: 5,
    margin: 2,
  },
  list: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  icon: { paddingRight: 10 },
});

export default ListItem;
