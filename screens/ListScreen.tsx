// screens/List.tsx
import * as React from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "List">;

export default function ListScreen({ navigation }: Props) {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List</Text>
      <Text>This is where you show your List content.</Text>

      <View style={{ height: 20 }} />

      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Main")}
      />
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
