import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Boxes = ({ color }) => {
  return (
    <View
      style={{
        height: 100,
        borderRadius: 4,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
        backgroundColor: color,
        marginHorizontal: 4,
      }}
    >
      <Text style={{ color: "#fff" }}>
        {color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()}
      </Text>
    </View>
  );
};

export default Boxes;

const styles = StyleSheet.create({});
