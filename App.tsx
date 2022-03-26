import { StatusBar } from "expo-status-bar";
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
} from "react-native";

export default function App() {
  const handlePress = () =>
    // prompt on works on IOS only
    Alert.prompt("My title", "Enter your name", (text: any): void =>
      console.log(text)
    );
  return (
    <SafeAreaView style={styles.container}>
      <Button color={"orange"} title="Click me now!" onPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
