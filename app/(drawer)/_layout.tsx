import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerTitle: "" }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Portfolio App",
        }}
      />
    </Drawer>
  );
}
