import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Image, Switch } from "react-native";
import colors from "../../config/colors";
import FormField from "./../Components/forms/FormField";
import Screen from "./../Components/Screen";
import * as Font from "expo-font";
import BaseForm from "./../Components/forms/BaseForm";
import ingredientsApi from "../api/ingredients";
import SubmitButton from "./../Components/forms/SubmitButton";
import ImagePickerForm from "../Components/forms/ImagePickerForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import UploadBar from "./UploadBar";
import Context from "../../context/context";
import foodsApi from "../api/foods";
import ErrorMessage from "../Components/forms/ErrorMessage";
import AppPickerForm from "../Components/forms/AppPickerForm";
import validationSchema from "./../utils/validationSchema";
import categories from "../utils/ingredientCategories";

function EditItem({ route, navigation }) {
  const { item, isIngredient } = route.params;
  const date = new Date(item.expiry);
  const userContext = useContext(Context.UserContext);
  const itemContext = useContext(Context.ItemContext);
  const [resError, setResError] = useState();
  const [uploadBarVisible, setUploadBarVisible] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaded, error] = Font.useFonts({
    VINCHAND: require("../../assets/fonts/VINCHAND.ttf"),
    IndieFlower: require("../../assets/fonts/IndieFlower-Regular.ttf"),
  });

  item.imageUris = [];
  const expiryDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

  const handleSubmit = async (listing) => {
    const userId = userContext.user._id;
    itemContext.setItemChanged(false);
    setProgress(0);
    setUploadBarVisible(true);
    const response = await (isIngredient
      ? ingredientsApi.editIngredient(
          { ...listing, userId },
          (progress) => {
            setProgress(progress);
          },
          item._id
        )
      : foodsApi.editFood(
          { ...listing, userId },
          (progress) => {
            setProgress(progress);
          },
          item._id
        ));
    if (!response.ok || response == undefined) {
      setUploadBarVisible(false);
      if (response.data) {
        setResError(response.data);
      }

      return alert("Could not save the item");
    }

    setUploaded(true);
    navigation.navigate("MyListings");
    itemContext.setItemChanged(true);
  };

  return (
    <Screen style={styles.container} style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <UploadBar
        onDone={() => {
          setUploadBarVisible(false);
        }}
        progress={progress}
        visible={uploadBarVisible}
        uploaded={uploaded}
      />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"always"}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <BaseForm
          initialValues={{
            name: item.name,
            quantity: item.quantity,
            expiry: expiryDate,
            address: item.address,
            category: item.category,
            city: item.city,
            phoneNumber: item.phoneNumber,
            images: item.imageUris,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ImagePickerForm name="images" />
          <View style={styles.header}>
            {loaded && (
              <Text style={styles.title}>
                {isIngredient ? "Edit Ingredient" : "Edit Food "}
              </Text>
            )}
          </View>
          <ErrorMessage error={resError} visible={resError !== null} />
          <FormField name="name" placeholder="Name" />
          <FormField name="quantity" placeholder="Quantity" />
          {isIngredient && (
            <AppPickerForm
              numberOfColumns={3}
              items={categories}
              name="category"
              placeholder="Category"
            />
          )}
          <FormField name="expiry" placeholder="Expiry Date (MM/DD/YYYY)" />
          <FormField name="address" placeholder="Address" />
          <FormField name="city" placeholder="City" />
          <FormField name="phoneNumber" placeholder="Phone Number" />
          <SubmitButton title="Submit" color={colors.secondary} />
        </BaseForm>
      </KeyboardAwareScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  logo: {
    width: "100%",
    height: 100,
    alignSelf: "center",
  },
  header: {
    justifyContent: "center",
    flexDirection: "row",
  },
  switch: {
    position: "absolute",
    right: 15,
  },
  title: {
    fontFamily: "IndieFlower",
    fontSize: 30,
    color: colors.white,
  },

  switchLabel: {
    fontFamily: "IndieFlower",
    position: "absolute",
    right: 15,
    marginTop: -20,
    textAlign: "right",
    color: colors.white,
  },
});

export default EditItem;
