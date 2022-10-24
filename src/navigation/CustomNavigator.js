import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import FavouriteNavigation from "./FavouriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export const CustomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavouriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: (focused) => renderPokeball(focused),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function renderPokeball(focused) {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={
        focused.focused
          ? { width: 70, height: 70, top: -20 }
          : { width: 75, height: 75, top: -15 }
      }
    />
  );
}
