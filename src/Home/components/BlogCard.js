import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const BlogCard = () => {
  const openWeb = async (str) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(str);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(str);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
        Blog Post
      </Text>

      <View
        style={{ elevation: 2, backgroundColor: "#f39c12", borderRadius: 4 }}
      >
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            color: "#fff",
            textAlign: "center",
          }}
        >
          A javascript Library - React JS
        </Text>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          height={200}
          resizeMode="cover"
          style={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
        />

        <View style={{ padding: 10 }}>
          <Text
            numberOfLines={3}
            style={{ textAlign: "justify", marginVertical: 4, color: "#fff" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                textAlign: "center",
                backgroundColor: "#ecf0f1",
                alignItems: "center",
                padding: 8,
                borderRadius: 4,
                elevation: 1,
                marginRight: 6,
              }}
              onPress={() => openWeb("https://reactnative.dev/")}
            >
              <Text style={{ fontWeight: 700 }}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                textAlign: "center",
                backgroundColor: "#ecf0f1",
                alignItems: "center",
                padding: 8,
                borderRadius: 4,
                elevation: 1,
              }}
              onPress={() => openWeb("https://github.com/Zain-987")}
            >
              <Text style={{ fontWeight: 700 }}>My Work</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({});
