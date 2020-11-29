import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./../Components/AppText";
import ListItem from "../Components/ListItem";
import colors from "../../config/colors";
import Screen from "./../Components/Screen";
import Context from "../../context/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const listItems = [
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    navigate: "myMessages",
  },
];

function MyAccount({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.container}>
      <ListItem
        style={styles.account}
        name="account"
        color={colors.white}
        title={user.name}
        subtitle={user.email + "\n(This functionality is under developement)"}
      />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("MyListings")}
      >
        <ListItem
          style={styles.account}
          name="format-list-bulleted"
          color={colors.primary}
          title="My Listings"
        />
      </TouchableWithoutFeedback>
      <View style={styles.list}>
        <FlatList
          data={listItems}
          keyExtractor={(listItems) => listItems.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              name={item.icon.name}
              title={item.title}
              subtitle="(This functionality is under developement)"
              color={item.icon.backgroundColor}
            />
          )}
        />
      </View>

      <ListItem
        name="logout"
        color={colors.dodgerBlue}
        title="Logout"
        onPress={logOut}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.black },
  list: { marginVertical: 30, justifyContent: "center" },
  account: { margin: 30 },
});

export default MyAccount;
