import React, { useState, useEffect } from "react";

//Components
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
// import Icon from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/Ionicons";
import { addPokemonFavouriteApi, isFavouriteApi } from "../api/favourite";

//Styles
import { styles } from "../styles";

export default function Favourite(props) {
  const [isFavourite, setIsFavourite] = useState(undefined);

  const { id } = props;

  useEffect(() => {
    getFav();
  }, [id]);

  const addFavourite = async () => {
    await addPokemonFavouriteApi(id);
    // console.log("Add to favourites", id);
    setIsFavourite(!isFavourite);
  };

  const getFav = async () => {
    try {
      const response = await isFavouriteApi(id);
      setIsFavourite(response);
      // console.log("Response", response);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return (
    <>
      {isFavourite && (
        <Icon name="heart" color="#fff" size={20} onPress={addFavourite} />
      )}
      {!isFavourite && (
        <Icon
          name="heart-outline"
          color="#fff"
          size={20}
          onPress={addFavourite}
        />
      )}
    </>
  );
}
