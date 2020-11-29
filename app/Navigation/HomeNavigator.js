import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Constants from "expo-constants";
import { View } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IngredientNavigator from "./IngredientNavigator";
import FoodNavigator from "./FoodNavigator";

const TopTab = createMaterialTopTabNavigator();

const HomeNavigator = () => (
  <TopTab.Navigator
    tabBarOptions={{
      showIcon: true,
      tabStyle: {
        flexDirection: "row",
        marginTop: Constants.statusBarHeight,
        borderBottomColor: colors.black,
      },

      indicatorStyle: { backgroundColor: colors.secondary },
      labelStyle: { fontSize: 15 },
    }}
  >
    <TopTab.Screen
      name="Food"
      component={FoodNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="food" color={color} size={20} />
        ),
      }}
    />
    <TopTab.Screen
      name="Ingredient"
      component={IngredientNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="food-apple" color={color} size={20} />
        ),
      }}
    />
  </TopTab.Navigator>
);

export default HomeNavigator;
