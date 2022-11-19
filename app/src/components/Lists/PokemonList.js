import { StyleSheet, StatusBar, FlatList, Text } from "react-native";
import PokemonCard from "../Cards/PokemonCard";

const PokemonsList = ({ data, bottomPagination }) => {
  const renderItem = ({ item }) => <PokemonCard item={item} key={item.name} />;

  const toReturn = (
    <FlatList
      data={data.results}
      renderItem={renderItem}
      keyExtractor={(pokemon) => pokemon.name}
      ListFooterComponent={bottomPagination}
    />
  );

  return toReturn;
};

export default PokemonsList;
