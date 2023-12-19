import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Boxes from "./Boxes";

const FlatCards = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Flat Cards</Text>
      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Boxes color={"green"} />
        <Boxes color={"gray"} />
        <Boxes color={"red"} />
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({});
