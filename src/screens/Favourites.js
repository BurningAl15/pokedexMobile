import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

//Components
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../hooks";

import { getPokemonFavouriteApi } from "../api/favourite";
import { getSinglePokemonApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

//Styles
import { styles } from "../styles";

export default function Favourites(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const { auth } = useAuth();

  const [pokemons, setPokemons] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        loadPokemons();
      }
    }, [auth])
  );

  const loadPokemons = async () => {
    try {
      const response = await getPokemonFavouriteApi();
      const pokemonsArray = [];

      for await (const id of response) {
        const pokemonDetails = await getSinglePokemonApi(id);
        pokemonsArray.push({
          url: pokemonDetails.url,
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={!auth ? styles.container : styles.pokedexContainer}>
      <StatusBar style="auto" />
      {!auth ? (
        <NoLogged />
      ) : (
        <>
          <PokemonList pokemon={pokemons} />
        </>
      )}
    </SafeAreaView>
  );
}
