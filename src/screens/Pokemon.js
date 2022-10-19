import React, { useState, useEffect } from "react";

//Components
import { ScrollView, Text, ActivityIndicator } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

//Styles
import { styles } from "../styles/";

import { getSinglePokemonApi } from "../api/pokemon";
import { Header, Type } from "../components/Pokemon/";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  const loadPokemon = async () => {
    try {
      const response = await getSinglePokemonApi(params.id);
      setPokemon(response);
    } catch (e) {
      navigation.goBack();
      console.error(e);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, [params]);

  if (!pokemon)
    return (
      <ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />
    );

  return (
    // <SafeAreaView style={styles.container}>
    <ScrollView>
      <StatusBar style="auto" />
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      {/* <Text>
        {JSON.stringify(
          pokemon.sprites.other["official-artwork"].front_default
        )}
      </Text> */}
      <Type types={pokemon.types} />
    </ScrollView>
    // </SafeAreaView>
  );
}
