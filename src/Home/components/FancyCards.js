import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCards() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 10 }}>
        Trending Places
      </Text>

      <View
        style={{ elevation: 2, backgroundColor: "#dfe6e9", borderRadius: 4 }}
      >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/19446124/pexels-photo-19446124/free-photo-of-barren-rocks-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          height={200}
          resizeMode="cover"
          style={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
        />

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}>
            {`Desert Mountains`.toLocaleUpperCase()}
          </Text>
          <Text>Balochistan , Pakistan</Text>
          <Text
            numberOfLines={3}
            style={{ textAlign: "justify", marginVertical: 4 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Text style={{ fontWeight: 600 }}>12 minutes away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
