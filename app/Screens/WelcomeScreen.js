import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import AppButton from "../Components/AppButton";
import colors from "../../config/colors";

function WelcomeScreen(props) {
  const handleLogin = () => props.navigation.navigate("Login");
  const handleRegister = () => props.navigation.navigate("Register");
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={require("../../assets/background.jpg")}
    >
      <Image style={styles.image} source={require("../../assets/app.png")} />
      <View style={styles.buttons}>
        <AppButton color={colors.primary} title="Login" onPress={handleLogin} />
        <AppButton
          color={colors.secondary}
          title="Register"
          onPress={handleRegister}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,

    justifyContent: "flex-end",
  },
  image: {
    width: "70%",
    height: "50%",
    alignSelf: "center",
    position: "absolute",
    top: 50,
  },
  buttons: {},
});

export default WelcomeScreen;
