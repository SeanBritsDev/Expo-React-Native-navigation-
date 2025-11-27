import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      <Text>This is where you show your details content.</Text>

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
