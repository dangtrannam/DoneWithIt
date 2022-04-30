import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Fruits", value: 1 },
  { label: "Clothes", value: 2 },
  { label: "Electronics", value: 3 },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon={"apps"} placeholder={"Category"} />
      <AppTextInput icon={"email"} placeholder="email" />
    </Screen>
  );
}
