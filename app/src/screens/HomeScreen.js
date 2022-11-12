import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

import { Button } from "react-native-paper";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const RenderItem = ({ item }) => <Item title={item.name} />;

const PokemonsList = ({ data }) => {
  const toReturn = data.results.map((pokemon) => (
    <RenderItem item={pokemon} key={pokemon.name} />
  ));
  return toReturn;
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
  buttonsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "horizontal",
    justifyContent: "space-between",
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>{toRender}</View>
        <View
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button title={"Hi"}></Button>
          <Button title={"Hi"}></Button>
        </View>
        <Button title={"Hi"} style={{ width: 20, height: 20 }}></Button>
        <Text>Hi</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
