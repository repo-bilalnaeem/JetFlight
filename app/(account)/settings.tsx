import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

interface NavBtnProps {
  name: string;
  pathname?: string;
}

const NavigationButton = ({ name, pathname }: NavBtnProps) => {
  return (
    <Fragment>
      <Pressable>
        <View style={styles.button}>
          <Text style={styles.btnName}>{name}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
        </View>
      </Pressable>
      <Divider />
    </Fragment>
  );
};

const Settings = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Settings</Text>

      <ScrollView
        style={{ paddingHorizontal: 16, marginTop: 24 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>General</Text>
          <NavigationButton name="Language" />
          <NavigationButton name="Notification Center" />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Account & Security</Text>
          <NavigationButton name="Email and Mobile Number" />
          <NavigationButton name="Security Settings" />
          <NavigationButton name="Delete Account" />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Other</Text>
          <NavigationButton name="About JetFlight Travel App" />
          <NavigationButton name="Privacy Policy" />
          <NavigationButton name="Terms and Conditions" />
        </View>
        <View style={[styles.button]}>
          <Text style={[styles.btnName, { color: "gray", fontWeight: "500" }]}>
            Rate App
          </Text>
          <Text style={{ fontWeight: "500", color: "gray" }}>v4.87.2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
  },

  button: {
    // paddingHorizontal: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    // gap: 24,
    justifyContent: "space-between",
  },

  btnName: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: "400",
  },

  heading: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 12,
  },

  container: {
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 16,
    paddingTop: 36,
    paddingLeft: 16,
  },
});

export default Settings;
