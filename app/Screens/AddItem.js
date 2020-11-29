import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, Switch } from "react-native";
import colors from "../../config/colors";
import FormField from "./../Components/forms/FormField";
import Screen from "./../Components/Screen";
import AppPicker from "./../Components/AppPicker";
import * as Font from "expo-font";
import * as Yup from "yup";
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Food Name"),
  quantity: Yup.string().required().min(1).max(10000).label("Quantity"),
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("City"),
  phoneNumber: Yup.string().required().label("Contact Number"),
  expiry: Yup.string().required().label("Expiry Date"),
  images: Yup.array(),
});

const catogories = [
  { label: "Dairy", icon: "cow", bgcolor: "white", value: "DAIRY" },
  { label: "Seafood", icon: "fish", bgcolor: "blue", value: "SEAFOOD" },
  {
    label: "Produce",
    icon: "ios-nutrition",
    iconType: "Ionicons",
    bgcolor: "green",
    value: "PRODUCE",
  },
  {
    label: "Chicken",
    icon: "earlybirds",
    iconType: "FontAwesome5",
    bgcolor: "#fed330",
    value: "CHICKEN",
  },
  { label: "Meat", icon: "pig", bgcolor: "red", value: "MEAT" },
  {
    label: "Nuts",
    icon: "md-leaf",
    iconType: "Ionicons",
    bgcolor: "#80391e",
    value: "NUTS",
  },
  { label: "Grains", icon: "grain", bgcolor: "#de8f43", value: "GRAINS" },
  { label: "Other", icon: "apps", bgcolor: "#74cce0", value: "OTHER" },
];

function AddItem() {
  const userContext = useContext(Context.UserContext);
  const itemContext = useContext(Context.ItemContext);
  const [resError, setResError] = useState();
  const [isIngredient, setIsIngredient] = useState(false);
  const [category, setCategory] = useState();
  const [uploadBarVisible, setUploadBarVisible] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaded, error] = Font.useFonts({
    VINCHAND: require("../../assets/fonts/VINCHAND.ttf"),
    IndieFlower: require("../../assets/fonts/IndieFlower-Regular.ttf"),
  });

  if (!loaded) {
    console.log(error);
  }

  const handleSubmit = async (listing, { resetForm }) => {
    const userId = userContext.user._id;
    console.log(userContext);

    itemContext.setItemChanged(false);
    setProgress(0);
    setUploadBarVisible(true);
    const response = await (isIngredient
      ? ingredientsApi.addIngredients({ ...listing, userId }, (progress) =>
          setProgress(progress)
        )
      : foodsApi.addFoods({ ...listing, userId }, (progress) =>
          setProgress(progress)
        ));

    if (!response.ok || response == undefined) {
      setUploadBarVisible(false);
      if (response.data) {
        setResError(response.data);
      }
      return alert("Could not save the ingredient");
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
            {loaded && (
              <Text style={styles.title}>
                {isIngredient ? "Add Ingredient" : "Add Food "}
              </Text>
            )}
            {loaded && (
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
              items={catogories}
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
