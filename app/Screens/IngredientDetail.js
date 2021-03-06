import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Screen from "./../Components/Screen";
import AppText from "./../Components/AppText";
import { SliderBox } from "react-native-image-slider-box";
import colors from "../../config/colors";
import { getDate } from "./FoodDetail";
import * as Font from "expo-font";

function IngredientDetail({ route }) {
  const [loaded, error] = Font.useFonts({
    Architect: require("../../assets/fonts/ArchitectsDaughter-Regular.ttf"),
    Chilanka: require("../../assets/fonts/Chilanka-Regular.ttf"),
  });

  const item = route.params;

  return (
    <Screen style={styles.container}>
      {item.images.length !== 0 && (
        <View style={styles.image}>
          <SliderBox
            images={item.images}
            onCurrentImagePressed={(index) => {
              console.log(`Image ${index} pressed`);
            }}
          />
        </View>
      )}
      {loaded && (
        <View>
          <AppText style={styles.text}>Item Name: {item.name}</AppText>
          <AppText style={styles.text}>Quantity: {item.quantity}</AppText>
          <AppText style={styles.text}>
            Expiry Date: {getDate(item.expiry)}
          </AppText>
          <AppText style={styles.text}>
            Address: {item.address + ", " + item.city}
          </AppText>
          <AppText style={styles.text}>Category: {item.category}</AppText>
          <AppText style={styles.text}>
            Contact Number: {item.phoneNumber}
          </AppText>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.black },

  image: {
    margin: 10,
    width: "100%",
    overflow: "hidden",
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: "Chilanka",
    margin: 5,
    color: colors.white,
  },
});

export default IngredientDetail;
