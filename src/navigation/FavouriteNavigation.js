import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Favourites } from "../screens";
import { Pokemon } from "../screens";

const Stack = createNativeStackNavigator();

export default function FavouriteNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{
          title: "Favoritos",
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
          headerTranslucent: true,
          headerHideShadow: true,
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
