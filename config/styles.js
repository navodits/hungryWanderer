import React from "react";
import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    width: "100%",
    color: colors.darkGrey,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
};
