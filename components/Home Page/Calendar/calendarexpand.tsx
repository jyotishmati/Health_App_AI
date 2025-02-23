// import React from "react";
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// const getDaysInMonth = (month: number, year: number) => {
//   return new Date(year, month + 1, 0).getDate();
// };

// const CalendarScreen = () => {
//   const navigation = useNavigation();
//   const currentYear = new Date().getFullYear();
//   const today = new Date();
//   const todayDate = today.getDate();
//   const todayMonth = today.getMonth();

//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December",
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header with Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="chevron-back-outline" size={24} color="#0f172a" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Calendar</Text>
//       </View>

//       {/* Scrollable Calendar */}
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {months.map((month, monthIndex) => {
//           const daysInMonth = getDaysInMonth(monthIndex, currentYear);
//           const firstDay = new Date(currentYear, monthIndex, 1).getDay();

//           return (
//             <View key={monthIndex} style={styles.monthContainer}>
//               <Text style={styles.monthTitle}>{month} {currentYear}</Text>

//               {/* Week Days */}
//               <View style={styles.weekRow}>
//                 {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                   <Text key={day} style={styles.weekDay}>{day}</Text>
//                 ))}
//               </View>

//               {/* Calendar Grid */}
//               <View style={styles.daysContainer}>
//                 {Array.from({ length: firstDay }).map((_, i) => (
//                   <View key={`empty-${i}`} style={styles.emptyDay} />
//                 ))}

//                 {Array.from({ length: daysInMonth }, (_, day) => {
//                   const isToday = monthIndex === todayMonth && day + 1 === todayDate;
//                   return (
//                     <View key={day} style={[styles.day, isToday && styles.today]}>
//                       <Text style={[styles.dayText, isToday && styles.todayText]}>{day + 1}</Text>
//                     </View>
//                   );
//                 })}
//               </View>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// };

// export default CalendarScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     paddingTop: 40,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingBottom: 10,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#0f172a",
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   monthContainer: {
//     paddingHorizontal: 16,
//     marginBottom: 20,
//   },
//   monthTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#1e293b",
//     marginBottom: 10,
//   },
//   weekRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 5,
//   },
//   weekDay: {
//     width: 40,
//     textAlign: "center",
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#64748b",
//   },
//   daysContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   emptyDay: {
//     width: 40,
//     height: 40,
//   },
//   day: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 2,
//     borderRadius: 20,
//     backgroundColor: "#f1f5f9",
//   },
//   today: {
//     backgroundColor: "#0f172a",
//   },
//   dayText: {
//     fontSize: 14,
//     color: "#334155",
//   },
//   todayText: {
//     color: "#ffffff",
//     fontWeight: "bold",
//   },
// });

import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const CalendarScreen = () => {
  const navigation = useNavigation();
  const currentYear = new Date().getFullYear();
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const yearOptions = Array.from({ length: 21 }, (_, i) => ({
    label: `${currentYear - 10 + i}`,
    value: currentYear - 10 + i,
  }));

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={24} color="#0f172a" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Calendar</Text>
      </View>

      {/* Year Picker */}
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select Year:</Text>
        <RNPickerSelect
          onValueChange={(year: number) => setSelectedYear(year)}
          items={yearOptions}
          value={selectedYear}
          style={{
            inputIOS: styles.picker,
            inputAndroid: styles.picker,
          }}
        />
      </View>

      {/* Scrollable Calendar */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {months.map((month, monthIndex) => {
          const daysInMonth = getDaysInMonth(monthIndex, selectedYear);
          const firstDay = new Date(selectedYear, monthIndex, 1).getDay();

          return (
            <View key={monthIndex} style={styles.monthContainer}>
              <Text style={styles.monthTitle}>{month} {selectedYear}</Text>

              {/* Week Days */}
              <View style={styles.weekRow}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <Text key={day} style={styles.weekDay}>{day}</Text>
                ))}
              </View>

              {/* Calendar Grid */}
              <View style={styles.daysContainer}>
                {Array.from({ length: firstDay }).map((_, i) => (
                  <View key={`empty-${i}`} style={styles.emptyDay} />
                ))}

                {Array.from({ length: daysInMonth }, (_, day) => {
                  const isToday = selectedYear === currentYear && monthIndex === todayMonth && day + 1 === todayDate;
                  return (
                    <View key={day} style={[styles.day, isToday && styles.today]}>
                      <Text style={[styles.dayText, isToday && styles.todayText]}>{day + 1}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  pickerLabel: {
    fontSize: 16,
    color: "#1e293b",
    marginRight: 10,
  },
  picker: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    color: "#1e293b",
    backgroundColor: "#f8fafc",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  monthContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  monthTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 10,
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  weekDay: {
    width: 40,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#64748b",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  emptyDay: {
    width: 40,
    height: 40,
  },
  day: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
  },
  today: {
    backgroundColor: "#0f172a",
  },
  dayText: {
    fontSize: 14,
    color: "#334155",
  },
  todayText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
