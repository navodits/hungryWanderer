import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FoodListing from "./../Screens/FoodListing";
import FoodDetail from "./../Screens/FoodDetail";

const Stack = createStackNavigator();

const FoodNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="FoodListing" component={FoodListing} />
    <Stack.Screen name="FoodDetail" component={FoodDetail} />
  </Stack.Navigator>
);

export default FoodNavigator;
