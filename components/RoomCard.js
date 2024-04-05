import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const RoomCard = ({
  imageSource,
  roomType,
  refundable,
  breakfastIncluded,
  freeWifi,
  price,
  availability,
  handleBooking,
}) => {
  return (
    <View style={styles.card}>
      {/* Image section */}
      <View style={styles.imageSection}>
        <Image source={imageSource} style={styles.hotelImage} />
      </View>
      {/* Service options and prices */}
      <View style={styles.detailsSection}>
        <View style={styles.flexcont}>
          <View style={styles.iconText}>
            <FontAwesome5 name="bed" size={17} color="#000" />
            <Text style={styles.serviceText}>{roomType}</Text>
          </View>
          {refundable && (
            <View style={styles.iconText}>
              <FontAwesome5 name="calendar-alt" size={17} color="#000" />
              <Text style={styles.serviceText}>Refundable</Text>
            </View>
          )}
        </View>
        <View style={styles.flexcont}>
          {breakfastIncluded && (
            <View style={styles.iconText}>
              <FontAwesome5 name="utensils" size={17} color="#000" />
              <Text style={styles.serviceText}>Breakfast Included</Text>
            </View>
          )}
          {freeWifi && (
            <View style={styles.iconText}>
              <FontAwesome5 name="wifi" size={17} color="#000" />
              <Text style={styles.serviceText}>Free Wi-Fi</Text>
            </View>
          )}
        </View>
        <Text style={styles.availabilityText}>
          Availability: {availability}
        </Text>
      </View>
      {/* Selection buttons */}
      <View style={styles.buttonsSection}>
        <Text style={styles.priceText}>${price}/night</Text>
        {/* Add your selection button here */}
        <TouchableOpacity style={styles.selectButton} onPress={handleBooking}>
          <Text style={styles.buttonText}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fcfcfc", // White card background
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    marginTop: 20,
  },
  imageSection: {
    alignItems: "center",
  },
  hotelImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  detailsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    borderColor: "#000",
  },
  serviceText: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
  },
  priceText: {
    fontSize: 17,
    color: "#000",
    fontWeight: "bold",
    margin: 7,
  },
  availabilityText: {
    fontSize: 16,
    marginTop: 2,
  },
  buttonsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  selectButton: {
    backgroundColor: "#171717",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fcfcfc",
  },
  flexcont: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default RoomCard;