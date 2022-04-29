import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingVertical: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 50,
            width: 50,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "orange",
          height: 100,
          width: 100,
          margin: 10,
          marginStart: 20,
          marginTop: 30,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
