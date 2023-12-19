import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
const Todos = ({ todos, deleteTodo, update, updating }) => {
  const removeTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <ScrollView style={{ padding: 10, marginBottom: 20 }}>
      {todos.map((todo, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#1abc9c",
              borderRadius: 4,
              padding: 8,
              marginVertical: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{ flex: 1, fontSize: 18, color: "#fff", letterSpacing: 1 }}
            >
              {todo?.text.length >= 20
                ? `${todo?.text.slice(0, 20)}...`
                : todo?.text}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{ marginRight: 4 }}
                onPress={() => {
                  update(todo.id);
                  updating((update) => !update);
                }}
              >
                <Ionicons name="md-pencil-sharp" size={30} color="#ecf0f1" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeTodo(id)}>
                <Ionicons name="trash-bin-sharp" size={30} color="#ecf0f1" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Todos;

const styles = StyleSheet.create({});
