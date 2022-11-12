import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.name} />;

const PokemonsList = ({ data }) => {
  return (
    <FlatList
      data={data.results}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const HomeScreen = () => {
  const [page, setPage] = useState(1);

  const incrementPage = () => {
    setPage(page + 1);
  };
  const decrementPage = () => {
    setPage(page - 1);
  };

  const {
    data,
    error,
    isFetching: isLoading1,
  } = useGetPokemonsPaginatorQuery(page);

  const toRender = error ? (
    <Text>Oh no, there was an error</Text>
  ) : isLoading1 ? (
    <Text>Loading...</Text>
  ) : data ? (
    <View>
      <PokemonsList data={data} />
    </View>
  ) : null;

  return <SafeAreaView style={styles.container}>{toRender}</SafeAreaView>;
};

export default HomeScreen;
