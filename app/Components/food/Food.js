import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppTextInput from "../AppTextInput";
import AppText from "./../AppText";
import colors from "../../../config/colors";
import { color } from "react-native-reanimated";
import Icon from "../Icon";
function Food({ image, name, city }) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <View style={styles.description}>
        <AppText style={styles.text}>{name}</AppText>
        <AppText style={{ color: colors.grey }}>{city}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: colors.white,
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
    color: colors.black,
  },
});

export default Food;
