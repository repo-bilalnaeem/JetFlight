import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

interface Prop {
  title: string;
}

const CustomHeader = ({ title }: Prop) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.arrow, { top: top * 1.5 }]}>
      <Pressable onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    height: 60,
    marginHorizontal: 12,
    display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    gap: 16,
  },

  title: {
    fontSize: 32,
    fontWeight: "400",
  },
});

export default CustomHeader;
