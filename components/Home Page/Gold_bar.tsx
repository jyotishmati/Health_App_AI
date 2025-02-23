import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Svg, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
export default function VerificationScreen() {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        {/* Gold Button */}
        <LinearGradient colors={["#FFD700", "#E6C200"]} style={styles.goldButton}>
          <TouchableOpacity style={styles.goldButtonInner}>
            <Text style={styles.goldText}>GOLD</Text>
          </TouchableOpacity>
        </LinearGradient>
  
        {/* Icons Section */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('Chatbot' as never)}>
            {chatIcon()}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper} onPress={() => console.log("Hashtag Icon Pressed")}>
            {hashtagIcon()}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper} onPress={() => console.log("Notification Icon Pressed")}>
            {notificationIcon()}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  // Icons (Fixed Size & Alignment)
  const chatIcon = () => (
    <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7l-3 3z"
        stroke="#0E2A3A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
  
  const hashtagIcon = () => (
    <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <Path d="M7 3L5 21" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M19 3L17 21" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M5 9H19" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M5 15H19" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
  
  const notificationIcon = () => (
    <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8z"
        stroke="#0E2A3A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#0E2A3A",
      paddingHorizontal: 16,
      paddingVertical: 10,
      height: 78,
    },
    goldButton: {
      width: 95,
      height: 45,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    goldButtonInner: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
    goldText: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#0E2A3A",
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      marginLeft: 100, // Move icons slightly to the right
    },
    iconWrapper: {
      width: 42,
      height: 42,
      borderRadius: 20,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  