// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

// const BottomNavBar = () => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button}>
//         <Ionicons name="home-outline" size={22} color="#6B7280" />
//         <Text style={styles.text}>Home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <MaterialIcons name="local-hospital" size={22} color="#6B7280" />
//         <Text style={styles.text}>Doctors</Text>
//       </TouchableOpacity>

//       <View style={styles.centerButton}>
//         <FontAwesome5 name="star" size={24} color="#6B7280" />
//       </View>

//       <TouchableOpacity style={styles.button}>
//         <MaterialIcons name="analytics" size={22} color="#6B7280" />
//         <Text style={styles.text}>Analytics</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <FontAwesome5 name="user-circle" size={22} color="#0E3A5F" />
//         <Text style={[styles.text, styles.activeText]}>Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   centerButton: {
//     backgroundColor: "#F3F4F6",
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20, // Move it up slightly
//   },
//   text: {
//     fontSize: 12,
//     color: "#6B7280",
//     marginTop: 4,
//   },
//   activeText: {
//     color: "#0E3A5F",
//     fontWeight: "bold",
//   },
// });

// export default BottomNavBar;


import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window"); // Get screen width
const barWidth = width * 0.3; // Bottom indicator width

const BottomNavBar = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="home-outline" size={22} color="#6B7280" />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="local-hospital" size={22} color="#6B7280" />
          <Text style={styles.text}>Doctors</Text>
        </TouchableOpacity>

        <View style={styles.centerButton}>
          <FontAwesome5 name="star" size={24} color="#6B7280" />
        </View>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="analytics" size={22} color="#6B7280" />
          <Text style={styles.text}>Analytics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome5 name="user-circle" size={22} color="#0E3A5F" />
          <Text style={[styles.text, styles.activeText]}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Indicator Bar */}
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  centerButton: {
    backgroundColor: "#F3F4F6",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Lift up the button
  },
  text: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  activeText: {
    color: "#0E3A5F",
    fontWeight: "bold",
  },
  indicatorContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 5, // Adjust spacing
  },
  indicator: {
    width: 150,
    height: 5.5,
    backgroundColor: "#9CA3AF",
    borderRadius: 10,
  },
});

export default BottomNavBar;
