import React from "react";
import { useFormikContext } from "formik";
import AppButton from "./../AppButton";

function SubmitButton({ title, style, color }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} color={color} onPress={handleSubmit} />;
}

export default SubmitButton;
