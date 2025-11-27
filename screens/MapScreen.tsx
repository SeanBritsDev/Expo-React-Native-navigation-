// screens/MapScreen.tsx
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map Page</Text>
      <Text>Later you can add a real map here (e.g. react-native-maps).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
  },
});
