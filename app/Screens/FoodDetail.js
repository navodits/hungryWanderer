import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import colors from "../../config/colors";
import AppText from "./../Components/AppText";
import Screen from "./../Components/Screen";
import * as Font from "expo-font";

function FoodDetail({ route }) {
  const [loaded, error] = Font.useFonts({
    Architect: require("../../assets/fonts/ArchitectsDaughter-Regular.ttf"),
    Chilanka: require("../../assets/fonts/Chilanka-Regular.ttf"),
  });
  if (!loaded) {
    console.log(error);
  }
  const item = route.params;

  const getDate = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    date = new Date(date);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return day + " " + month + ", " + year;
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.image}>
        <SliderBox
          style={{ height: 250 }}
          images={item.imageUris}
          onCurrentImagePressed={(index) => {
            console.log(`Image ${index} pressed`);
          }}
        />
      </View>
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
          <AppText style={styles.text}>
            Contact Number: {item.phoneNumber}
          </AppText>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  image: { margin: 10, width: "100%", overflow: "hidden", borderRadius: 20 },
  text: {
    fontSize: 24,
    fontFamily: "Chilanka",
    margin: 5,
    color: colors.white,
  },
});

export default FoodDetail;
