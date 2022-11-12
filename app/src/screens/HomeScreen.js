import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
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
    isLoading: isLoading1,
  } = useGetPokemonsPaginatorQuery(page);
  console.log(data);

  const toRender = error ? (
    <Text>Oh no, there was an error</Text>
  ) : isLoading1 ? (
    <Text>Loading...</Text>
  ) : data ? (
    <Text>
      <Text>loaded</Text>
    </Text>
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
