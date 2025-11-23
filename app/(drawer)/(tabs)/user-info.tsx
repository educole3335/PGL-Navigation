import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Description from "../../../components/Description";

export default function App() {
  const activities = [
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.firstTopRowContainer}>My Portfolio App</Text>
      <View style={styles.bodyStyles}>
        <View>
          <View>
            <Description />
          </View>
          <Text style={styles.listActivities}>Cosas que me gustan mucho:</Text>
          <ScrollView style={{ padding: 10 }}>
            {activities.map((activity) => (
              <Text key={activity} style={styles.stylePerActivity}>
                {activity}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30 },
  firstTopRowContainer: { fontSize: 20, fontWeight: "700", padding: 10 },
  bodyStyles: { padding: 10 },
  listActivities: { fontSize: 16, marginTop: 10, fontWeight: "600" },
  stylePerActivity: { fontSize: 14, paddingVertical: 6 },
});
