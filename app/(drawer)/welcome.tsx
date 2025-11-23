import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  function goToPortfolio() {
    router.push("/(tabs)");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a mi App</Text>
      <Image
        source={require("../../assets/SofyanAmrabat.jpg")}
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Explora mi portfolio con tus proyectos y hobbies.
      </Text>

      <TouchableOpacity style={styles.button} onPress={goToPortfolio}>
        <Text style={styles.buttonText}>Ir al Portfolio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 12 },
  image: { width: 160, height: 160, marginBottom: 12 },
  subtitle: { textAlign: "center", marginBottom: 20 },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: "white", fontWeight: "700" },
});
