import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import IngredientsApi from "./../api/ingredients";
import colors from "../../config/colors";
import Ingredient from "../Components/Ingredient";
import Context from "../../context/context";

function IngredientsListings({ navigation }) {
  const itemContext = useContext(Context.ItemContext);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    loadIngredients();
  }, [itemContext.itemChanged]);

  const loadIngredients = async () => {
    const response = await IngredientsApi.getIngredients();
    setIngredients(response.data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ingredients}
        keyExtractor={(ingredient) => ingredient._id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("IngredientDetail", item)}
          >
            <View>
              <Ingredient name={item.name} city={item.city} icon={item.icon} />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.black },
});

export default IngredientsListings;
