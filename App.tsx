// App.tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import DetailsScreen from "./screens/DetailsScreen";
import MainScreen from "./screens/MainScreen";
import MapScreen from "./screens/MapScreen";
import SettingsScreen from "./screens/SettingsScreen";

export type RootStackParamList = {
  Main: undefined;
  Details: undefined;
  Settings: undefined;
  Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
