import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const RadioButton = ({
  selected,
  onPress,
  label,
}: {
  selected: boolean;
  onPress: () => void;
  label: string;
}) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonSelected} /> : null}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const calendarModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["100%"], []);
  const calendarSnapPoints = useMemo(() => ["65%"], []);
  const navigation = useNavigation();

  const handleOpenCalendar = () => {
    setIsModalVisible(true);
    calendarModalRef.current?.present();
  };

  const handleDateSelect = (day: any) => {
    setSelectedDate(day.dateString);
    calendarModalRef.current?.dismiss();
  };

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        display: isModalVisible ? "none" : undefined,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 0,
        height: 75,
        // borderTopWidth: 0,
      },
    });
  }, [isModalVisible]);

  return (
    <BottomSheetModalProvider>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <StatusBar style="light" />
          <Image
            source={require("@/assets/images/world-map.png")}
            style={styles.image}
          />
          <Text style={styles.heading}>Discover{"\n"}a new world</Text>
          <View style={styles.container}>
            <BottomSheet
              ref={bottomSheetRef}
              index={0}
              snapPoints={snapPoints}
              keyboardBehavior="fillParent"
              enablePanDownToClose={false}
              handleIndicatorStyle={{ backgroundColor: "#fff " }}
              backgroundStyle={{
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
              }}
            >
              <View style={styles.bottomSheetContainer}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <RadioButton
                    selected={selectedOption === "option1"}
                    onPress={() => setSelectedOption("option1")}
                    label="One-way"
                  />
                  <RadioButton
                    selected={selectedOption === "option2"}
                    onPress={() => setSelectedOption("option2")}
                    label="Round-trip"
                  />
                </View>
                <View style={{ marginBottom: -16 }}>
                  <Text style={styles.label}>From</Text>
                  <View style={[styles.inputContainer, { marginBottom: 10 }]}>
                    <Image
                      source={require("@/assets/images/takeoff.png")}
                      style={styles.icon}
                    />
                    <BottomSheetTextInput
                      placeholder="New York, USA"
                      style={styles.inputText}
                    />
                  </View>
                  <Pressable
                    style={{
                      alignSelf: "flex-end",
                      marginRight: 4,
                      borderRadius: 100,
                      borderWidth: StyleSheet.hairlineWidth,
                      padding: 3,
                      borderColor: "#E7E9EA",
                    }}
                  >
                    <Ionicons
                      name="swap-vertical-outline"
                      size={20}
                      color={"#2584e9"}
                    />
                  </Pressable>
                </View>
                <View>
                  <Text style={styles.label}>To</Text>
                  <View style={styles.inputContainer}>
                    <Image
                      source={require("@/assets/images/landing.png")}
                      style={styles.icon}
                    />
                    <BottomSheetTextInput
                      placeholder="Da Nang, Vietnam"
                      style={styles.inputText}
                    />
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>Departure Date</Text>
                  <View style={styles.inputContainer}>
                    <Image
                      source={require("@/assets/images/calendar.png")}
                      style={styles.icon}
                    />
                    <TouchableOpacity onPress={handleOpenCalendar}>
                      <Text
                        style={
                          selectedDate
                            ? styles.inputText
                            : {
                                color: "#c0c0c0",
                                fontWeight: "500",
                                fontSize: 15,
                              }
                        }
                      >
                        {selectedDate || "Select a date"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>Travelers</Text>
                  <View style={styles.inputContainer}>
                    <Image
                      source={require("@/assets/images/person.png")}
                      style={[styles.icon, { height: 25 }]}
                    />
                    <BottomSheetTextInput
                      placeholder="1 Adult , 0 child, 0 infant"
                      style={styles.inputText}
                    />
                  </View>
                  <Pressable
                    style={styles.buttonSearch}
                    onPress={() => router.push("/(flights)")}
                  >
                    <Text style={styles.buttonText}>Search Flights</Text>
                  </Pressable>
                </View>
              </View>
            </BottomSheet>

            <BottomSheetModal
              ref={calendarModalRef}
              index={0}
              snapPoints={calendarSnapPoints}
              containerStyle={{ backgroundColor: "#0000003a" }}
              backdropComponent={({ style }) => (
                <View style={[style, styles.backdrop]} />
              )}
              onChange={(index) => setIsModalVisible(index >= 0)}
              handleIndicatorStyle={{
                backgroundColor: "#797979",
                width: 45,
                marginTop: 5,
              }}
              enablePanDownToClose={false}
            >
              <View style={styles.calendarContainer}>
                <Text
                  style={{
                    fontSize: 22,
                    marginLeft: 14,
                    marginTop: 5,
                    marginBottom: 16,
                    fontWeight: "500",
                    width: "100%",
                  }}
                >
                  Select Date
                </Text>
                <Text
                  style={{ marginLeft: 14, marginBottom: 16, color: "gray" }}
                >
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>

                <Calendar
                  onDayPress={handleDateSelect}
                  theme={{
                    arrowColor: "#0064D2",
                    textDayFontFamily: "monospace",
                    textMonthFontFamily: "monospace",
                    textDayHeaderFontFamily: "monospace",
                    textDayFontWeight: "400",
                    textMonthFontWeight: "600",
                    textDayHeaderFontWeight: "300",
                  }}
                  markedDates={{
                    [selectedDate]: { selected: true, color: "#2584e9" },
                  }}
                />
                <Pressable
                  style={styles.doneButton}
                  onPress={() => calendarModalRef.current?.dismiss()}
                >
                  <Text style={styles.doneButtonText}>Search Date</Text>
                </Pressable>
              </View>
            </BottomSheetModal>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </BottomSheetModalProvider>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0064D2",
  },
  image: {
    height: 220,
    // aspectRatio: 2.75,
    width: "120%",
    // display:"flex",
    // alignItems:"center",
    // resizeMode: "cover",
    tintColor: "#2584e9",
  },
  icon: {
    tintColor: "#2584e9",
    width: 28,
    height: 20,
    resizeMode: "contain",
  },

  heading: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
    position: "absolute",
    top: 110,
    left: 24,
  },

  container: {
    flex: 1,
  },

  bottomSheetContainer: {
    marginTop: 5,
    marginHorizontal: 20,
    flexDirection: "column",
    gap: 16,
  },

  label: {
    fontWeight: "600",
    color: "#414D5A",
    fontSize: 15,
    marginBottom: 8,
  },

  inputContainer: {
    backgroundColor: "#fefefe",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E8E9",
    flexDirection: "row",
    gap: 24,
  },

  inputText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 15,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },

  buttonSearch: {
    marginTop: 16,
    backgroundColor: "#2584e9",
    paddingVertical: 16,
    borderRadius: 14,
  },

  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.418)",
  },

  calendarContainer: {
    padding: 5,
    backgroundColor: "#fff",
  },

  doneButton: {
    marginTop: 20,
    padding: 10,
    paddingVertical: 14,
    backgroundColor: "#2584e9",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 15,
  },

  doneButtonText: {
    color: "#fff",
    fontSize: 16,
  },

  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2584e9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#2584e9",
  },
  radioButtonLabel: {
    fontSize: 16,
    color: "#333",
  },
});

export default Home;
