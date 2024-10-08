import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";

const Id = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Search Flights</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 16,
    paddingTop: 24,
    paddingLeft: 16,
  },
});

export default Id;
