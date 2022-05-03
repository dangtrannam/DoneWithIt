import React from "react";
import AppText from "../AppText";
import { StyleSheet, Image } from "react-native";
import colors from "../../config/colors";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) {
    return null;
  }
  return <AppText style={styles.error}>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
export default ErrorMessage;
