import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Pokedex, Pokemon } from "../screens";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "Pokemon",
        }}
      />
    </Stack.Navigator>
  );
}
