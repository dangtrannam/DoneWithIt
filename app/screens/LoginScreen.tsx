import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder={"Email"}
              icon="email"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            <ErrorMessage visible={touched.email} error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
              placeholder={"Password"}
              icon="lock"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            <ErrorMessage visible={touched.password} error={errors.password} />
            <AppButton title={"Login"} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
