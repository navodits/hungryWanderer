import React from "react";
import { View, StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import AppButton from "./../AppButton";
import colors from "../../../config/colors";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormField({
  icon,
  name,
  color,
  width = "100%",
  placeholder,
  ...otherProps
}) {
  const {
    setFieldTouched,
    setFieldValue,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        icon={icon}
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        placeholder={placeholder}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
