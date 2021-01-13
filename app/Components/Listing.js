import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import IconButton from "./IconButton";
import * as Font from "expo-font";
import ingredientsApi from "../api/ingredients";
import foodsApi from "../api/foods";
import context from "../../context/context";

function Listing({ item, isIngredient, onEdit }) {
  const itemContext = useContext(context.ItemContext);
  const [loaded, error] = Font.useFonts({
    Architect: require("../../assets/fonts/ArchitectsDaughter-Regular.ttf"),
    IndieFlower: require("../../assets/fonts/IndieFlower-Regular.ttf"),
  });

  const handleDelete = async () => {
    const response = await (isIngredient
      ? ingredientsApi.deleteIngredient(item._id)
      : foodsApi.deleteFood(item._id));
    if (!response.ok || response == undefined) {
      return alert("Could not delete the item");
    }
    itemContext.setItemChanged(true);
    itemContext.setItemChanged(false);
  };
  return (
    <View style={styles.container}>
      {loaded && <Text style={styles.text}>{item.name}</Text>}
      <IconButton
        icon="pencil"
        iconColor={colors.black}
        onPress={onEdit}
        bgColor={colors.dodgerBlue}
      ></IconButton>
      <IconButton
        icon="trash-can"
        iconColor={colors.black}
        onPress={handleDelete}
        bgColor={colors.danger}
      ></IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: colors.grey,
    margin: 10,
    height: 40,
  },
  text: {
    marginLeft: 5,
    flex: 1,
    fontFamily: "Architect",
    fontSize: 25,
    fontWeight: "500",
    color: colors.black,
  },
});

export default Listing;
