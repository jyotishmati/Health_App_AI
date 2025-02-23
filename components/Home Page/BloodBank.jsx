import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const BloodBankCard = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Blood Bank</Text>
        <TouchableOpacity style={styles.expandIcon}>
          <FontAwesome name="expand" size={14} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View style={styles.card}>
        {/* Left - Image */}
        <Image
          source={require("../../assets/images/bloodbank.jpg")} 
          style={styles.image}
        />

        {/* Right - Details */}
        <View style={styles.details}>
          <Text style={styles.title}>
            Emergency <Text style={styles.bold}>B+ Blood Needed</Text>
          </Text>

          <View style={styles.infoRow}>
            <MaterialIcons name="location-on" size={16} color="#6B7280" />
            <Text style={styles.infoText}>MS Ramaiah Hospital</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="event" size={16} color="#6B7280" />
            <Text style={styles.infoText}>08 Nov 2023</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="schedule" size={16} color="#6B7280" />
            <Text style={styles.infoText}>02:00 PM</Text>
          </View>
        </View>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0E3A5F",
  },
  expandIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#0E3A5F",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F5F7FA",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: 120,
    height: 132,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#1F2937",
  },
  bold: {
    fontWeight: "bold",
    color: "#1F2937",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  infoText: {
    fontSize: 14,
    color: "#6B7280",
    marginLeft: 5,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#0E3A5F",
    width: 35,
  },
});

export default BloodBankCard;
