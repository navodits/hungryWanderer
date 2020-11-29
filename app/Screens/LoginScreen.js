import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Screen from "../Components/Screen";
import colors from "../../config/colors";
import AppTextInput from "../Components/AppTextInput";
import FormField from "./../Components/forms/FormField";
import LoginForm from "../Components/forms/LoginForm";

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <LoginForm />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  logo: {
    width: "100%",
    height: 300,
    alignSelf: "center",
  },
});

export default LoginScreen;
