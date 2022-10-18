import React from "react";
import { StyleSheet, Text, FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemon, loadPokemons, isNext }) {
  const loadMore = () => {
    console.log("Cargando más pokemon");
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemonIndividual) => String(pokemonIndividual.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
