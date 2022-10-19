import React from "react";

//Components
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LoginForm, UserData } from "../components/Auth/";

//Styles
// import { styles } from "../styles/";

export default function Account() {
  const auth = null;

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      {auth ? <UserData /> : <LoginForm />}
    </SafeAreaView>
  );
}
