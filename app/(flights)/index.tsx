import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Ticket from "@/components/Ticket";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ticketData = [
  {
    id: "1",
    fromCode: "LGA",
    fromCity: "New York",
    toCode: "DAD",
    toCity: "Da Nang",
    departureDate: "August 28, 2021",
    departureTime: "8:00 AM",
    arrivalDate: "August 29, 2021",
    arrivalTime: "7:00 AM",
    duration: "23:00",
    price: 340,
  },
  {
    id: "2",
    fromCode: "LGA",
    fromCity: "New York",
    toCode: "DAD",
    toCity: "Da Nang",
    departureDate: "August 28, 2021",
    departureTime: "8:00 AM",
    arrivalDate: "August 29, 2021",
    arrivalTime: "7:00 AM",
    duration: "23:00",
    price: 340,
  },
  {
    id: "3",
    fromCode: "LGA",
    fromCity: "New York",
    toCode: "DAD",
    toCity: "Da Nang",
    departureDate: "August 28, 2021",
    departureTime: "8:00 AM",
    arrivalDate: "August 29, 2021",
    arrivalTime: "7:00 AM",
    duration: "23:00",
    price: 340,
  },
  {
    id: "4",
    fromCode: "LGA",
    fromCity: "New York",
    toCode: "DAD",
    toCity: "Da Nang",
    departureDate: "August 28, 2021",
    departureTime: "8:00 AM",
    arrivalDate: "August 29, 2021",
    arrivalTime: "7:00 AM",
    duration: "23:00",
    price: 340,
  },
  {
    id: "5",
    fromCode: "LGA",
    fromCity: "New York",
    toCode: "DAD",
    toCity: "Da Nang",
    departureDate: "August 28, 2021",
    departureTime: "8:00 AM",
    arrivalDate: "August 29, 2021",
    arrivalTime: "7:00 AM",
    duration: "23:00",
    price: 340,
  },
];

const TICKET_HEIGHT = 250;

const Flights = () => {
  const { top } = useSafeAreaInsets();
  // const renderItem = ({item})=><Ticket/>
  const renderItem = ({ item }: any) => (
    <Ticket
      fromCode={item.fromCode}
      fromCity={item.fromCity}
      toCode={item.toCode}
      toCity={item.toCity}
      duration={item.duration}
      departureTime={item.departureTime}
      departureDate={item.departureDate}
      arrivalTime={item.arrivalTime}
      arrivalDate={item.arrivalDate}
      price={item.price}
    />
  );
  return (
    <View style={styles.screen}>
      <Image
        source={require("@/assets/images/world-map.png")}
        style={styles.image}
      />
      <StatusBar style="light" />
      <View style={{ marginTop: top * 3 }}>
        <FlatList
          data={ticketData}
          snapToInterval={TICKET_HEIGHT}
          decelerationRate={"fast"}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // style={{paddingTop: top*3}}
          bounces={false}
          stickyHeaderHiddenOnScroll={true}
          contentContainerStyle={{
            paddingBottom: 190,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#0064D2",
    flex: 1,
  },

  image: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: "-100%",
    height: 400,
    objectFit: "scale-down",
    tintColor: "#2584e9",
  },
});

export default Flights;
