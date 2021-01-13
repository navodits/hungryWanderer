import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../config/colors";
import FormField from "./FormField";
import * as Yup from "yup";
import BaseForm from "./BaseForm";
import SubmitButton from "./SubmitButton";
import authApi from "../../api/auth";
import ErrorMessage from "./ErrorMessage";
import useAuth from "../../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginForm({ name, color }) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async (loginInfo) => {
    const response = await authApi.login(loginInfo.email, loginInfo.password);

    if (!response.ok) {
      setLoginFailed(true);
    }
    auth.logIn(response.data);
  };
  return (
    <>
      <BaseForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(loginInfo) => handleSubmit(loginInfo)}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />
        <View style={styles.container}>
          <FormField
            autoCapitalize="none"
            keyboardType="email-address"
            icon="email"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <SubmitButton title="Login" color={colors.secondary} />
      </BaseForm>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default LoginForm;
