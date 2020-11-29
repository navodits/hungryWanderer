import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodListing from "../Screens/FoodListing";
import HomeNavigator from "./HomeNavigator";
import AddItem from "../Screens/AddItem";
import MyAccount from "./../Screens/MyAccount";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddItemButton from "./../Components/food/AddItemButton";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import useAuth from "./../auth/useAuth";
import userApi from "../api/user";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { user } = useAuth();

  useEffect(() => {
    registerForPushNotification();
  }, []);
  const registerForPushNotification = async () => {
    // try {
    //   const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //   if (!permission.granted) return;
    //   const token = await Notifications.getExpoPushTokenAsync();
    //   await userApi.addPushNotificationToken(user._id, token);
    // } catch (error) {
    //   console.log("Error getting a push token", error);
    // }
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.secondary,
        tabStyle: {
          backgroundColor: colors.black,
        },
        labelStyle: { fontSize: 15 },
      }}
    >
      <Tab.Screen
        name="Food Items"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddItem"
        component={AddItem}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <AddItemButton
              onPress={() => navigation.navigate("AddItem")}
              name="home"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="My Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
