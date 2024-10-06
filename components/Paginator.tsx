import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";
import React from "react";

const Paginator = ({
  data,
  scrollX,
}: {
  data: any[];
  scrollX: Animated.Value;
}) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        height: 8,
        justifyContent: "center",
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: "#000", 
    marginHorizontal: 8,
  },
});

export default Paginator;
