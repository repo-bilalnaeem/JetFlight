import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { Pressable } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          height: 40,
        },
        tabBarStyle: {
          paddingTop: 10,
          //   borderTopWidth: 0,
          paddingBottom: 10,
          margin: 0,
          height: 75,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Search Flights",
          tabBarLabel: "Home",
          headerTintColor: "#fff",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transaction",
          tabBarLabel: "Transaction",
          headerLeft: () => (
            <Pressable
              onPress={() => router.navigate("/(tabs)")}
              style={{ marginLeft: 16 }}
            >
              <AntDesign name="arrowleft" size={24} />
            </Pressable>
          ),
          headerTintColor: "#000",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="payment" size={size} color={color} />
          ),
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "My Profile",
          headerTitleAlign: "left",
          tabBarLabel: "Account",
          //   headerLeft: () => (
          //     <Pressable
          //       onPress={() => router.navigate("/(tabs)")}
          //       style={{ marginLeft: 16 }}
          //     >
          //       <AntDesign name="arrowleft" size={24} />
          //     </Pressable>
          //   ),
          headerTintColor: "#fff",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          headerTransparent: true,
        }}
      />
    </Tabs>
  );
};

export default Layout;
