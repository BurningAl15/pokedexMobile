import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Account } from "../screens";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: "Mi Cuenta",
          headerTransparent: true,
          headerTranslucent: true,
          headerHideShadow: true,
        }}
      />
    </Stack.Navigator>
  );
}
