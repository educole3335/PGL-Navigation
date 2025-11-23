import React from "react";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#6200ee",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    />
  );
}
