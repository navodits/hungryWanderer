import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Screen from "./../Components/Screen";
import AppText from "./../Components/AppText";
import { SliderBox } from "react-native-image-slider-box";
import colors from "../../config/colors";

function IngredientDetail({ route }) {
  const item = route.params;
  const getDate = (date) => {
    date = new Date(date);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return day + " " + month + ", " + year;
  };

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
      <View>
        <AppText style={styles.text}>Item Name: {item.name}</AppText>
        <AppText style={styles.text}>Quantity: {item.quantity}</AppText>
        <AppText style={styles.text}>
          Expiry Date: {getDate(item.expiry)}
        </AppText>
        <AppText style={styles.text}>
          Address: {item.address + " ," + item.city}
        </AppText>
        <AppText style={styles.text}>Contact Number: {item.city}</AppText>
      </View>
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
    color: colors.white,
  },
});

export default IngredientDetail;
