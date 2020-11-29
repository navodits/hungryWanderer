import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import DefaultStyles from "../../config/styles";

function AppText(props) {
  return (
    <Text
      style={[DefaultStyles.text, props.style]}
      numberOfLines={props.numberOfLines}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({});

export default AppText;
