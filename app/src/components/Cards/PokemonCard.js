import { View, Text } from "react-native";
import { StyleSheet, StatusBar } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import { getPokemonIdFromURL } from "../../functions/generalFunctions";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import colors from "../../app/colors";

const PokemonCard = ({ item }) => {
  const navigation = useNavigation();

  const id = getPokemonIdFromURL(item.url);
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Card
      style={styles.item}
      onPress={() => navigation.navigate("Details", item)}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Avatar.Image
          style={{ backgroundColor: "transparent" }}
          size={60}
          source={{ uri: imageURL }}
        />

        <Text style={styles.title}>{item.name}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.backGroundSurface,
  },
  title: {
    fontSize: 32,
    padding: 20,
  },
});

export default PokemonCard;
