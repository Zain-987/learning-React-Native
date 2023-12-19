import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FlatCards from "../components/FlatCards";
import ElevatedCards from "../components/ElevatedCards";
import FancyCards from "../components/FancyCards";
import BlogCard from "../components/BlogCard";
import Chats from "../components/Chats";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <BlogCard />
        <Chats />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
