import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { router, Stack } from "expo-router";
import { onboardingSteps } from "@/utils/slides"; 
import { Animated } from "react-native";
import Paginator from "@/components/Paginator";

const getImage = (icon: string) => {
  switch (icon) {
    case "Layer-1":
      return require("@/assets/images/Layer-1.png");
    case "Layer-2":
      return require("@/assets/images/Layer-2.png");
    case "Layer-3":
      return require("@/assets/images/Layer-3.png");
    default:
      return null;
  }
};

const OnBoardingItem = ({
  item,
  screenIndex,
  setScreenIndex,
  scrollX,
  flatListRef,
}: any) => {
  const handleNext = () => {
    if (screenIndex < onboardingSteps.length - 1) {
      // Scroll to the next index
      flatListRef.current?.scrollToIndex({ index: screenIndex + 1, animated: true });
    } else {
      // router.push("/home"); // Example of navigation to home screen
    }
  };

  const handleSkip = () => {
    // router.push("/home"); // Skip and go to home screen
  };

  const WIDTH = useWindowDimensions().width;

  return (
    <View style={{ width: WIDTH, marginBottom: 20 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ justifyContent: "space-between" }}>
        <View style={styles.imageContainer}>
          <Image source={getImage(item.icon)} style={styles.img} />
        </View>

        <View style={{ marginHorizontal: 16 }}>
          <Text style={styles.heading}>{item.title}</Text>
          <View style={styles.buttonRow}>
            <Pressable style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.buttonText}>Skip</Text>
            </Pressable>
            <Pressable style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextText}>
                {screenIndex === onboardingSteps.length - 1 ? "Finish" : "Next"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null); 
  const viewableItemChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setScreenIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        ref={flatListRef} 
        data={onboardingSteps}
        renderItem={({ item }) => (
          <OnBoardingItem
            item={item}
            scrollX={scrollX}
            screenIndex={screenIndex}
            setScreenIndex={setScreenIndex}
            flatListRef={flatListRef} // Pa
          />
        )}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemChanged}
        style={{ flex: 1 }}
      />
      <Paginator data={onboardingSteps} scrollX={scrollX} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#252831",
    fontSize: 16,
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "#0064D2",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    flex: 1,
  },
  nextText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: "500",
    marginBottom: 48,
  },
  skipButton: {
    padding: 12,
  },
  imageContainer: {
    marginHorizontal: 16,
    borderRadius: 24,
    height: "75%",
    overflow: "hidden",
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "#000000",
    borderRadius: 10,
  },
});

export default OnboardingScreen;
