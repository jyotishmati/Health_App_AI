// import React, { useState, useEffect } from "react";
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
// import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns";

// const HorizontalCalendar: React.FC = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);

//   useEffect(() => {
//     const firstDay = startOfMonth(currentDate);
//     const lastDay = endOfMonth(currentDate);
//     setDaysInMonth(eachDayOfInterval({ start: firstDay, end: lastDay }));
//   }, [currentDate]);

//   return (
//     <View style={styles.container}>
//       {/* Month & Year */}
//       <Text style={styles.monthText}>{format(currentDate, "MMMM yyyy")}</Text>

//       {/* Horizontal Scrollable Dates */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
//         {daysInMonth.map((day, index) => {
//           const isToday = format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
//           return (
//             <TouchableOpacity key={index} style={[styles.dayContainer, isToday && styles.today]}>
//               <Text style={[styles.dayText, isToday && styles.todayText]}>
//                 {format(day, "d")}
//               </Text>
//               <Text style={[styles.weekdayText, isToday && styles.todayText]}>
//                 {format(day, "E")}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#F8FAFC",
//   },
//   monthText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#0F172A",
//     marginBottom: 10,
//   },
//   scrollContainer: {
//     flexDirection: "row",
//   },
//   dayContainer: {
//     alignItems: "center",
//     padding: 10,
//     marginHorizontal: 5,
//     borderRadius: 20,
//     backgroundColor: "#E2E8F0",
//   },
//   today: {
//     backgroundColor: "#0F172A",
//   },
//   dayText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#1E293B",
//   },
//   weekdayText: {
//     fontSize: 12,
//     color: "#64748B",
//   },
//   todayText: {
//     color: "#F1F5F9",
//   },
// });

// export default HorizontalCalendar;

import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { Ionicons } from "@expo/vector-icons"; // For the expand icon

const HorizontalCalendar: React.FC = () => {
  const navigation = useNavigation(); // Navigation hook
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);

  useEffect(() => {
    const firstDay = startOfMonth(currentDate);
    const lastDay = endOfMonth(currentDate);
    setDaysInMonth(eachDayOfInterval({ start: firstDay, end: lastDay }));
  }, [currentDate]);

  // Function to handle expand button press
  const handleExpandPress = () => {
    navigation.navigate("CalendarExpand" as never); // Navigate to the full calendar screen
  };

  return (
    <View style={styles.container}>
      {/* Header: Month, Year & Expand Button */}
      <View style={styles.header}>
        <Text style={styles.monthText}>{format(currentDate, "MMMM yyyy")}</Text>
        <TouchableOpacity onPress={handleExpandPress} style={styles.expandButton}>
          <Ionicons name="expand-outline" size={20} color="#0F172A" />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scrollable Dates */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {daysInMonth.map((day, index) => {
          const isToday = format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
          return (
            <TouchableOpacity key={index} style={[styles.dayContainer, isToday && styles.today]}>
              <Text style={[styles.dayText, isToday && styles.todayText]}>
                {format(day, "d")}
              </Text>
              <Text style={[styles.weekdayText, isToday && styles.todayText]}>
                {format(day, "E")}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F8FAFC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
  },
  expandButton: {
    padding: 8,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  dayContainer: {
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
  },
  today: {
    backgroundColor: "#0F172A",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
  },
  weekdayText: {
    fontSize: 12,
    color: "#64748B",
  },
  todayText: {
    color: "#F1F5F9",
  },
});

export default HorizontalCalendar;

