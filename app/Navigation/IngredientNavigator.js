import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IngredientsListings from "./../Screens/IngredientsListings";
import IngredientDetail from "../Screens/IngredientDetail";

const Stack = createStackNavigator();

const IngredientNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="IngredientListing" component={IngredientsListings} />
    <Stack.Screen name="IngredientDetail" component={IngredientDetail} />
  </Stack.Navigator>
);

export default IngredientNavigator;
