import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Favourite } from '../screens';

const Stack = createNativeStackNavigator();

export default function FavouriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name = "Favourite" 
            component = {Favourite}
            options = {{
                title:"Favoritos"
            }}
        />
    </Stack.Navigator>
  )
}