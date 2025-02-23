import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Articles</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      
      {/* Article Card */}
      <ImageBackground
        source={require("../../assets/images/article.jpg")}
        style={styles.articleCard}
        imageStyle={styles.articleImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.articleTitle}>
            Looking for Specialist Doctors?
          </Text>
          <Text style={styles.articleSubtitle}>
            Schedule an appointment with our top doctors.
          </Text>
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </ImageBackground>

      {/* Join Community Section */}
      <Text style={styles.joinTitle}>Join Community</Text>
      
      {/* Underline */}
      <View style={styles.underline} />

      <Text style={styles.joinSubtitle}>
        Join now to get all the information about Health Industry! (#)
      </Text>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join Now</Text>
      </TouchableOpacity>
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
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#007AFF",
  },
  articleCard: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    overflow: "hidden",
  },
  articleImage: {
    borderRadius: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "flex-end",
    alignItems: "flex-start",  // Fixes text alignment issue
    paddingHorizontal: 15,
    paddingBottom: 15, // Adjusts text positioning
  },
  articleTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 200,
  },
  articleSubtitle: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 45,
    maxWidth: 200,
  },
  dotsContainer: {
    flexDirection: "row",
    alignSelf: "center", // Align dots to the left
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 35,
  },
  joinTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#0F172A",
  },
  underline: {
    width: "80%",
    height: 1,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginVertical: 10, // Adds spacing between title and subtitle
  },
  joinSubtitle: {
    textAlign: "center",
    color: "gray",
    marginTop: 5,
    fontSize: 16,
  },
  joinButton: {
    backgroundColor: "#0F172A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  joinButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
