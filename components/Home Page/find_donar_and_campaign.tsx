import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const BloodBankActions = () => {
  return (
    <View style={styles.container}>
      {/* Find Donor Button */}
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="search" size={22} color="#0E3A5F" />
        <Text style={styles.text}>Find Donor</Text>
      </TouchableOpacity>

      {/* Campaign Button */}
      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name="tint" size={22} color="#0E3A5F" />
        <Text style={styles.text}>Campaign</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 20,
      alignItems: "center",
      marginTop: -110, // Move the entire container up
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8F9FB",
        paddingVertical: 16, // Increased padding for height
        paddingHorizontal: 24, // Increased padding for width
        borderRadius: 20,
        minWidth: 160, // Increased width
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      text: {
        marginLeft: 8, // More spacing between icon and text
        fontSize: 17, // Slightly larger font
        fontWeight: "bold",
        color: "#0E3A5F",
      },
  });
  

export default BloodBankActions;
