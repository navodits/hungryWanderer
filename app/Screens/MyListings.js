import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import ListingsApi from "./../api/userListings";
import * as Font from "expo-font";
import colors from "../../config/colors";
import context from "../../context/context";
import Listing from "../Components/Listing";
import Screen from "./../Components/Screen";

function MyListings({ navigation }) {
  const itemContext = useContext(context.ItemContext);
  const [userIngredients, setUserIngredients] = useState([]);
  const [userFoods, setUserFoods] = useState([]);

  const [loaded, error] = Font.useFonts({
    VINCHAND: require("../../assets/fonts/VINCHAND.ttf"),
    IndieFlower: require("../../assets/fonts/IndieFlower-Regular.ttf"),
  });

  useEffect(() => {
    loadUserListings();
  }, [itemContext.itemChanged]);

  const loadUserListings = async () => {
    const response = await ListingsApi.getUserListings();
    const { ingredients, foods } = response.data;
    setUserIngredients(ingredients);
    setUserFoods(foods);
  };

  const handleEdit = (item, isIngredient) => {
    navigation.navigate("EditItem", { item, isIngredient });
  };

  return (
    <Screen style={styles.container}>
      <View>
        {loaded && <Text style={styles.title}>Ingredient</Text>}
        {userIngredients.length === 0 ? (
          <Text style={styles.text}>No Ingredients Posted</Text>
        ) : (
          <FlatList
            data={userIngredients}
            keyExtractor={(listing) => listing._id}
            renderItem={({ item }) => (
              <Listing
                item={item}
                isIngredient={true}
                onEdit={() => {
                  handleEdit(item, true);
                }}
              />
            )}
          />
        )}
      </View>
      <View>
        {loaded && <Text style={styles.title}>Food</Text>}
        {userFoods.length === 0 ? (
          <Text style={styles.text}>No Ingredients Posted</Text>
        ) : (
          <FlatList
            data={userFoods}
            keyExtractor={(listing) => listing._id}
            renderItem={({ item }) => (
              <Listing
                item={item}
                isIngredient={false}
                onEdit={() => {
                  handleEdit(item, false);
                }}
              />
            )}
          />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.black },
  title: {
    textAlign: "center",
    fontFamily: "IndieFlower",
    fontSize: 30,
    color: colors.white,
  },
  text: {
    marginVertical: 20,
    fontSize: 15,
    color: colors.white,
  },
});

export default MyListings;
