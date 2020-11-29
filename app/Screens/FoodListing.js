import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import Food from "../Components/food/Food";
import Screen from "./../Components/Screen";
import foodsApi from "../api/foods";
import context from "../../context/context";

function FoodListing({ navigation }) {
  const itemContext = useContext(context.ItemContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    loadFoods();
  }, [itemContext.itemChanged]);

  const loadFoods = async () => {
    const response = await foodsApi.getFoods();
    setFoods(response.data);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        keyExtractor={(foods) => foods._id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("FoodDetail", item);
            }}
          >
            <View>
              <Food
                image={item.imageUris[0]}
                name={item.name}
                city={item.city}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
});

export default FoodListing;
