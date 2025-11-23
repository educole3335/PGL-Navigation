import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PortfolioHeader from "../../../components/PortfolioHeader";

export default function TabsLayout() {
  return (
    <View style={styles.wrapper}>
      <PortfolioHeader />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarPosition: "bottom",
        }}
      >
        <Tabs.Screen
          name="user-info"
          options={{
            title: "Mi Info",
            tabBarIcon: () => (
              <Ionicons name="person-circle-outline" size={30} color={"#000"} />
            ),
          }}
        />
        <Tabs.Screen
          name="codeQr"
          options={{
            title: "Mi Qr",
            tabBarIcon: () => (
              <Ionicons name="qr-code" size={30} color={"#000"} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});
