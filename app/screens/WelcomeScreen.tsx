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
import AppButton from "../components/AppButton";

import colors from "../config/colors";

interface IWelcomeScreenProps {}

function WelcomeScreen(props: IWelcomeScreenProps) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"login"} onPress={() => alert("hello")} />
        <AppButton
          title={"register"}
          color="secondary"
          onPress={() => alert("hello")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
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
  tagLine: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
