import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Screen from "../Components/Screen";
import colors from "../../config/colors";
import RegisterForm from "../Components/forms/RegisterForm";

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <RegisterForm />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  logo: {
    width: "100%",
    height: 150,
    alignSelf: "center",
  },
});

export default RegisterScreen;
