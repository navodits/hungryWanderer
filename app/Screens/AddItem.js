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

function AddItem() {
  const userContext = useContext(Context.UserContext);
  const itemContext = useContext(Context.ItemContext);
  const [resError, setResError] = useState();
  const [isIngredient, setIsIngredient] = useState(false);
  const [uploadBarVisible, setUploadBarVisible] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fontsLoaded, error] = Font.useFonts({
    VINCHAND: require("../../assets/fonts/VINCHAND.ttf"),
    IndieFlower: require("../../assets/fonts/IndieFlower-Regular.ttf"),
  });

  const handleSubmit = async (listing, { resetForm }) => {
    const userId = userContext.user._id;

    itemContext.setItemChanged(false);
    setProgress(0);
    setUploadBarVisible(true);
    const response = await (isIngredient
      ? ingredientsApi.addIngredients({ ...listing, userId }, (progress) => {
          setProgress(progress);
        })
      : foodsApi.addFoods({ ...listing, userId }, (progress) => {
          setProgress(progress);
        }));

    if (!response.ok || response == undefined) {
      setUploadBarVisible(false);
      if (response.data) {
        setResError(response.data);
      }
      return alert("Could not save the item");
    }
    resetForm();
    setUploaded(true);

    itemContext.setItemChanged(true);
  };

  return (
    <Screen style={styles.container} style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <UploadBar
        onDone={() => setUploadBarVisible(false)}
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
            name: "",
            quantity: "",
            expiry: "",
            address: "",
            category: "",
            city: "",
            phoneNumber: "",
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ImagePickerForm name="images" />
          <View style={styles.header}>
            {fontsLoaded && (
              <Text style={styles.title}>
                {isIngredient ? "Add Ingredient" : "Add Food "}
              </Text>
            )}
            {fontsLoaded && (
              <Text style={styles.switchLabel}>
                {isIngredient ? "Food" : "Ingredient"}
              </Text>
            )}

            <Switch
              style={styles.switch}
              trackColor={{ true: colors.primary, false: colors.secondary }}
              value={isIngredient}
              onValueChange={(newValue) => {
                setIsIngredient(newValue);
              }}
            />
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

export default AddItem;
