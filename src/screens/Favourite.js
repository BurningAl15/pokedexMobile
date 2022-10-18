import React from 'react';

//Components
import { Text } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

//Styles
import { styles } from '../styles/';

export default function Favourite() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text>Favourite</Text>
    </SafeAreaView>
  )
}