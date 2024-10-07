import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          height: 40,
        },
        tabBarStyle: {
          paddingTop: 10,
            borderTopWidth: 0,
          paddingBottom: 5,
          margin: 0,
          height: 70,
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
      {/* <Tabs.Screen name="home" /> */}
      {/* <Tabs.Screen name="home" /> */}
    </Tabs>
  );
};

export default Layout;
