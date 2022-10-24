import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import { useAuth } from "../../hooks";
import { getPokemonFavouriteApi } from "../../api/favourite";

export default function UserData(props) {
  const { navigation } = props;
  const { auth, logout } = useAuth();
  const [totalFavourites, setTotalFavourites] = useState(0);

  const getFav = async () => {
    try {
      const response = await getPokemonFavouriteApi();
      setTotalFavourites(size(response));
      // console.log("Response", response.length);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  useFocusEffect(
    useCallback(() => {
      getFav();
    })
  );

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     // The screen is focused
  //     // Call any action
  //     getFav();
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    getFav();
  }, [navigation]);

  useEffect(() => {
    getFav();
  }, [auth]);

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome! </Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={`${auth.username}`} />
        <ItemMenu title="Email" text={`${auth.email}`} />
        <ItemMenu
          title="Total Favourites"
          text={`${totalFavourites} Pokemon`}
        />
      </View>

      <Button title="Logout" onPress={logout} style={styles.btnLogout} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  space: {
    width: 10,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 130,
  },
  btnLogout: {
    paddingTop: 20,
  },
});
