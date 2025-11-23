import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Description from "./Description";

export default function PortfolioHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Portfolio</Text>
      <Description />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
});
