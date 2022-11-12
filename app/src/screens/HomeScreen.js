import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";

const PokemonsList = ({ data }) => {
  return data.results.map((pokemon) => (
    <Text key={pokemon.name}>{pokemon.name}</Text>
  ));
};

const HomeScreen = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
  console.log(data);

  if (!isLoading1) {
    console.log(data.results);
  }

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
      {toRender}
    </View>
  );
};

export default HomeScreen;
