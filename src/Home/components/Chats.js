import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import arr from "../utils/data";
export default function Chats() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
        Chats
      </Text>

      <View>
        {arr.map((ele, index) => (
          <TouchableOpacity
            key={index}
            style={{
              padding: 10,
              backgroundColor: "#ecf0f1",
              borderBottomWidth: 0.2,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: ele?.image }}
              height={50}
              width={50}
              resizeMode="contain"
              style={{ borderRadius: 50 }}
            />

            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontWeight: 700 }}>{ele?.name}</Text>
              <Text>{ele?.status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
