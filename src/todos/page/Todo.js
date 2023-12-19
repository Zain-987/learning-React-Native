import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import TodoHeader from "../componenets/TodoHeader.js";
import Todos from "../componenets/Todos.js";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [index, setIndex] = useState("");
  const [Error, setError] = useState("");
  const [isUpdating, setUpdating] = useState(false);

  const [todos, setTodos] = useState([
    { id: 0, text: "Something", status: false },
  ]);
  const addTodo = () => {
    if (inputVal.trim() === "") {
      return Alert.alert("Please Provide some Value ");
    }
    setTodos([
      ...todos,
      { id: todos.length + 1, text: inputVal, status: false },
    ]);
    setInputVal("");
  };

  const updateTodo = () => {
    let updationData = todos.map((ele) => {
      if (ele.id === index.id) {
        return { id: ele?.id, text: inputVal, status: false };
      }
      return ele;
    });

    // console.log(updateTodo);
    setTodos(updationData);
    setInputVal("");
    setUpdating(false);
  };
  const deleteTodo = (id) => {
    const given = todos.filter((ele) => ele?.id !== id);
    setTodos(given);
  };

  const applyTodo = (id) => {
    const given = todos.find((ele) => ele?.id === id);
    setInputVal(given?.text);
    setIndex(given);
  };
  return (
    <SafeAreaView
      style={{ width: Dimensions.get("screen").width * 1, marginTop: 10 }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 10,
        }}
      >
        Todo App
      </Text>
      {/* Todo Header */}

      {/* <KeyboardAvoidingView> */}
      <TodoHeader
        setValue={setInputVal}
        inputVal={inputVal}
        addTodo={addTodo}
        updating={isUpdating}
        updation={updateTodo}
      />
      {/* </KeyboardAvoidingView> */}

      {/* Todo Show casing */}

      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        update={applyTodo}
        updating={setUpdating}
      />
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({});
