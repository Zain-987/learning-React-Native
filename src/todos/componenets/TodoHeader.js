import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const TodoHeader = ({ setValue, inputVal, addTodo, updating, updation }) => {
  const createTodo = () => {
    addTodo();
  };

  return (
    <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
      <TextInput
        style={{ borderWidth: 0.3, padding: 8, flex: 1, borderRadius: 4 }}
        value={inputVal}
        onChangeText={(text) => setValue(text)}
      />
      {updating ? (
        <TouchableOpacity
          style={{
            padding: 6,
            backgroundColor: "#2ecc71",
            borderRadius: 4,
            marginLeft: 4,
          }}
          onPress={updation}
        >
          <Ionicons name="md-pencil-sharp" size={32} color="#fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            padding: 6,
            backgroundColor: "#2ecc71",
            borderRadius: 4,
            marginLeft: 4,
          }}
          onPress={createTodo}
        >
          <AntDesign name="check" size={32} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({});
