import { StyleSheet, StatusBar, FlatList, View } from "react-native";
import PokemonCard from "../Cards/PokemonCard";
import { Text } from "react-native-paper";

const PokemonsList = ({ data, bottomPagination, isFetching, refetch }) => {
  const renderItem = ({ item }) => <PokemonCard item={item} key={item.name} />;

  const headerComponent = (
    <View style={{ marginHorizontal: 24 }}>
      <Text>Pokemons List</Text>
      <Text>Paginated list of all pokemons</Text>
    </View>
  );

  const toReturn = (
    <View>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(pokemon) => pokemon.name}
        ListFooterComponent={bottomPagination}
        ListHeaderComponent={headerComponent}
        refreshing={isFetching}
        onRefresh={refetch}
      />
    </View>
  );

  return toReturn;
};

export default PokemonsList;
