import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { id: "1", name: "Heart", icon: "heart-outline" },
  { id: "2", name: "Dental", icon: "happy-outline" },
  { id: "3", name: "Kidney", icon: "water-outline" },
  { id: "4", name: "Stomach", icon: "fast-food-outline" },
  { id: "5", name: "Lung", icon: "cloud-outline" },
  { id: "6", name: "Brain", icon: "eye-outline" },
  { id: "7", name: "Mental", icon: "person-outline" },
  { id: "8", name: "Liver", icon: "flask-outline" },
];

const CategoriesGrid: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Grid Section */}
      <FlatList
        data={categories}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryButton}>
            <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={24} color="#0F172A" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  seeAll: {
    fontSize: 14,
    color: "#64748B",
  },
  categoryButton: {
    width: 78,
    height: 80,
    backgroundColor: "#F1F5F9",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  categoryText: {
    fontSize: 12,
    color: "#334155",
    marginTop: 4,
  },
});

export default CategoriesGrid;
