import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

function AppButton(props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.color }]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title} </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
    height: 45,
    marginBottom: 25,
    marginTop: 20,
  },

  text: {
    fontSize: 18,
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white,
    textTransform: "uppercase",
  },
});

export default AppButton;
