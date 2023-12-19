import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Counter from "./src/counter/Counter";
import Todo from "./src/todos/page/Todo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />

      {/* <Todo /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
