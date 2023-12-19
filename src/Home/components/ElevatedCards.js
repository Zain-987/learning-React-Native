import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCards() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 10 }}>
        Elevated Cards
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {arr.map((ele, index) => (
          <View
            key={index}
            style={{
              height: 80,
              width: 80,
              elevation: 1,
              marginHorizontal: 8,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              backgroundColor: "#c1c3c9",
            }}
          >
            <Text>Box</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
