import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVOURITE_STORAGE } from "../utils/constants";

export async function getPokemonFavouriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVOURITE_STORAGE);
    console.log("Response", response);
    // return response ? JSON.parse(response) : [];
    return JSON.parse(response || "[]");
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function addPokemonFavouriteApi(id) {
  try {
    let favourites = await getPokemonFavouriteApi();
    console.log("Favourites", favourites);

    if (!favourites.includes(id)) {
      favourites.push(id);
      console.log("Id", id, "\nFavourites", favourites);
      await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(favourites));
    } else {
      favourites = favourites.filter((fav) => fav !== id);
      console.log("Id", id, "\nFavourites", favourites);
      await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(favourites));
    }
    // await AsyncStorage.removeItem(FAVOURITE_STORAGE);
    // await AsyncStorage.clear();
    // const keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function isFavouriteApi(id) {
  try {
    const response = await getPokemonFavouriteApi();
    return includes(response, id);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
