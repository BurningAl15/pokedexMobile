import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        placeholder="Nombre del usuario"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
      />
      <Button title="Entrar" onPress={() => console.log("")} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});