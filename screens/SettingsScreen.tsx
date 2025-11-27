// screens/SettingsScreen.tsx
import * as React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function SettingsScreen() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.row}>
        <Text>Example setting</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
});
