import { useState } from "react";
import { Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
export default function App() {
  const [isNew, setIsNew] = useState<boolean>(false);
  return (
    <Screen>
      <AppTextInput icon={"email"} placeholder="email" />
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
