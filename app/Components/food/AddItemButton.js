import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AddItemButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    bottom: 15,
    borderColor: colors.secondary,
    borderWidth: 5,
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default AddItemButton;
