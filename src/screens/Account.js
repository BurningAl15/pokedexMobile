import React from 'react'

//Components
import { Text } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

//Styles
import { styles } from '../styles/';

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text>Account</Text>
    </SafeAreaView>
  )
}