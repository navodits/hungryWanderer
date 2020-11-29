import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccount from "./../Screens/MyAccount";
import MyListings from "./../Screens/MyListings";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MyAccount" component={MyAccount} />
    <Stack.Screen name="MyListings" component={MyListings} />
  </Stack.Navigator>
);

export default AccountNavigator;
