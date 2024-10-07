import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Account = () => {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.profileContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  profileContainer: {
    backgroundColor: "#0064D2",
    height: 200,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
});

export default Account;
