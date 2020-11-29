import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./../Screens/WelcomeScreen";
import RegisterScreen from "./../Screens/RegisterScreen";
import LoginScreen from "./../Screens/LoginScreen";
import colors from "../../config/colors";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={styles.header}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={styles.header}
    />
  </Stack.Navigator>
);

const styles = {
  header: {
    headerTitleAlign: "center",
    headerTintColor: colors.secondary,
    headerTitle: "",
    headerTransparent: true,
  },
};

export default AuthNavigator;
