import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Circle, Line } from "react-native-svg";

interface TicketProps {
  toCode: string;
  toCity: string;
  fromCode: string;
  fromCity: string;
  duration: string;
  departureTime: string;
  arrivalTime: string;
  departureDate: string;
  arrivalDate: string;
  price: number;
}

const Ticket = ({
  toCode,
  toCity,
  fromCode,
  fromCity,
  duration,
  departureDate,
  departureTime,
  arrivalDate,
  arrivalTime,
  price,
}: TicketProps) => {
  return (
    <View style={styles.ticketContainer}>
      <View style={styles.punchHoleLeft}>
        <Svg height="32" width="32">
          <Circle cx="16" cy="16" r="16" fill="#0064D2" />
        </Svg>
      </View>
      {/* Top Section with Locations */}
      <View style={[styles.row, { marginBottom: 18 }]}>
        <View style={styles.locationContainer}>
          <Text style={styles.code}>{fromCode}</Text>
          <Text style={styles.city}>{fromCity}</Text>
        </View>

        {/* Airplane Icon */}
        <View style={styles.iconContainer}>
          <Svg height="1" width="120" style={styles.dottedLine}>
            <Line
              x1="0"
              y1="0"
              x2="120"
              y2="0"
              stroke="black"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
          </Svg>
          <Ionicons name="airplane" size={24} color="#0064D2" />
          <Text style={styles.duration}>{duration} hours</Text>
        </View>

        <View style={styles.locationContainer}>
          <Text style={[styles.code, { textAlign: "right" }]}>{toCode}</Text>
          <Text style={styles.city}>{toCity}</Text>
        </View>
      </View>

      {/* Bottom Section with Time, Date, and Airline */}
      <View style={[styles.row, { marginBottom: 24 }]}>
        <View>
          <Text style={styles.time}>{departureTime}</Text>
          <Text style={styles.date}>{departureDate}</Text>
        </View>
        <View>
          <Text style={[styles.time, { textAlign: "right" }]}>
            {arrivalTime}
          </Text>
          <Text style={styles.date}>{arrivalDate}</Text>
        </View>
      </View>

      <Svg height="1" width="100%">
        <Line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="gray"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
      </Svg>

      {/* Airline and Price */}
      <View style={[styles.row, { marginTop: 8 }]}>
        <View style={styles.airlineContainer}>
          <Image
            source={require("@/assets/images/qatar-logo.png")}
            style={styles.airlineLogo}
          />
          <Text style={styles.airlineName}>Qatar Airways</Text>
        </View>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      <View style={styles.punchHoleRight}>
        <Svg height="32" width="32">
          <Circle cx="16" cy="16" r="16" fill="#0064D2" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    paddingBottom: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    // alignItems: "center",
  },
  code: {
    fontSize: 24,
    fontWeight: "400",
  },
  city: {
    fontSize: 14,
    color: "grey",
    marginVertical: 10,
  },
  iconContainer: {
    alignItems: "center",
    // top: -16
  },
  dottedLine: {
    position: "absolute",
    top: 12,
    width: 120,
    height: 1,
  },
  duration: {
    fontSize: 12,
    color: "grey",
  },
  time: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: "grey",
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  airlineLogo: {
    marginLeft: -5,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  airlineName: {
    fontSize: 16,
    marginLeft: 8,
    color: "gray",
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },

  punchHoleLeft: {
    position: "absolute",
    left: 0,
    top: "72%",
    transform: [{ translateX: -16 }], // Shift half the circle width
    backgroundColor: "#0064D2",
    borderRadius: 24,
  },
  punchHoleRight: {
    position: "absolute",
    right: 0,
    top: "72%",
    transform: [{ translateX: 16 }], // Shift half the circle width
    backgroundColor: "#0064D2",
    borderRadius: 24,
  },
});

export default Ticket;
