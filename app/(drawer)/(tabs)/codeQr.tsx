import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function codeQr() {
  return (
    <View style={styles.bodyStyles}>
      <View style={styles.centerQR}>
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerQR: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
