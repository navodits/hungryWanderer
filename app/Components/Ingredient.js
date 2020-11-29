import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppText from "./AppText";
import colors from "../../config/colors";
import { color } from "react-native-reanimated";
import Icon from "./Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Ingredient({ image, name, city, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <AppText style={styles.text}>{name}</AppText>
        <AppText style={{ color: colors.black }}>{city}</AppText>
      </View>
      <View style={styles.icon}>
        {!icon && (
          <MaterialCommunityIcons
            name="image-off"
            iconColor={colors.white}
            size={25}
          />
        )}
        {icon && (
          <MaterialCommunityIcons
            name="image-multiple"
            color={colors.secondary}
            size={25}
          />
        )}
        <MaterialCommunityIcons
          name="chevron-right-circle"
          color={colors.dodgerBlue}
          size={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: colors.grey,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },
  description: {
    padding: 10,
    height: 60,
    width: "80%",
  },
  text: {
    color: colors.white,
  },
  icon: {
    padding: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
});

export default Ingredient;
