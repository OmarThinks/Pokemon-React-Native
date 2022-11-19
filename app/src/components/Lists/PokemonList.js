import { StyleSheet, StatusBar, FlatList, Text } from "react-native";
import PokemonCard from "../Cards/PokemonCard";

const PokemonsList = ({ data, navigation, bottomPagination }) => {
  const toReturn = data.results.map((pokemon) => (
    <PokemonCard item={pokemon} key={pokemon.name} navigation={navigation} />
  ));

  const renderItem = ({ item }) => (
    <PokemonCard item={item} key={item.name} navigation={"abc"} />
  );

  const toReturn2 = (
    <FlatList
      data={data.results}
      renderItem={renderItem}
      keyExtractor={(pokemon) => pokemon.name}
      ListFooterComponent={bottomPagination}
    />
  );
  console.log(data);

  return toReturn2;
};

export default PokemonsList;
