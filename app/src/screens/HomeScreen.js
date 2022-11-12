import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import PokemonsList from "../components/Lists/PokemonList";

import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  buttonsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  paginationButton: {
    width: "30%",
    padding: 5,
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
        <View style={{ ...styles.buttonsContainer }}>
          <Button
            title={"Hi"}
            style={{ ...styles.paginationButton }}
            onPress={() => console.log("Pressed")}
          >
            Previous
          </Button>
          <Button
            title={"Hi"}
            style={{ ...styles.paginationButton }}
            onPress={() => console.log("Pressed")}
          >
            Next
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
