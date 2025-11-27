// screens/MainScreen.tsx
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Button, StyleSheet, View } from "react-native";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function MainScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <View style={styles.spacer} />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <View style={styles.spacer} />
      <Button title="Go to Map" onPress={() => navigation.navigate("Map")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  spacer: {
    height: 16,
  },
});
