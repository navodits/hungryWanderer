import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";
import colors from "../../../config/colors";

function ErrorMessage(props) {
  if (!props.visible || !props.error) return null;

  return <AppText style={styles.text}>{props.error}</AppText>;
}
const styles = StyleSheet.create({
  text: {
    color: colors.danger,
  },
});

export default ErrorMessage;
