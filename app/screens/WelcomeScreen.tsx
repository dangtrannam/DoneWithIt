import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Text,
  Button,
} from "react-native";

import colors from "../config/colors";

interface IWelcomeScreenProps {}

function WelcomeScreen(props: IWelcomeScreenProps) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <Button
        title="Login"
        color={colors.primary}
        onPress={() => true}
      ></Button>
      <Button
        title="Register"
        color={colors.secondary}
        onPress={() => true}
      ></Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
});

export default WelcomeScreen;
