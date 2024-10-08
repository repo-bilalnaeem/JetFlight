import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Search Flights",
          headerTransparent: true,
          headerTintColor: "#fff",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
