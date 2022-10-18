import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const { pokemon } = props;

  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.type),
    ...styles.bgStyles,
  };

  const goToPokemon = () => {
    console.log(`>>> Let's go to see the pokemon: ${pokemon.name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              # {`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
    // paddingTop: 55,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 5,
    // position: "relative",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
});
