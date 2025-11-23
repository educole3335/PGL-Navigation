import { View, Text, Button, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  const NavigateToPortfolio = () => {
    router.replace("/(drawer)/(tabs)/user-info");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido Amigooooooo!</Text>

      <Image
        source={require("../../assets/SofyanAmrabat.jpg")}
        style={styles.welcomeImage}
      />

      <Text style={styles.message}>
        Este es Adrian, el + sesi.
      </Text>

      <Button title="Ver mi Portfolio" onPress={NavigateToPortfolio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  welcomeImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    borderWidth: 3,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },
});