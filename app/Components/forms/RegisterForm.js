import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import AppButton from "./../AppButton";
import colors from "../../../config/colors";
import FormField from "./FormField";
import * as Yup from "yup";
import SubmitButton from "./SubmitButton";
import BaseForm from "./BaseForm";
import userApi from "../../api/user";
import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
import ErrorMessage from "./ErrorMessage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterForm() {
  const auth = useAuth();
  const [error, setError] = useState();
  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
    const response = await userApi.register(userInfo);
    console.log(response);
    if (!response.ok) {
      if (response.data) {
        setError(response.data);
      } else {
        setError("An unexpected error has occurred");
      }
      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );

    auth.logIn(authToken);
    console.log(authToken);
  };

  return (
    <>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"always"}
        showsVerticalScrollIndicator={false}
      >
        <BaseForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(userInfo) => handleSubmit(userInfo)}
          validationSchema={validationSchema}
          style={styles.container}
        >
          <ErrorMessage error={error} visible={error !== null} />
          <FormField name="name" icon="account" placeholder="Name" />
          <FormField
            name="email"
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <FormField
            autoCapitalize="none"
            name="password"
            icon="lock"
            placeholder="Password"
            secureTextEntry
          />
          <SubmitButton title="Register" color={colors.secondary} />
        </BaseForm>
      </KeyboardAwareScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 100,
  },
});

export default RegisterForm;
