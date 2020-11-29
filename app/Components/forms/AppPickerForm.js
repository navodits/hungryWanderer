import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

function AppPickerForm({ items, name, numberOfColumns, placeholder, width }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        icon="apps"
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppPickerForm;
