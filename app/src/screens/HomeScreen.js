import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import PokemonsList from "../components/Lists/PokemonList";
import { ActivityIndicator } from "react-native-paper";
import { Button } from "react-native-paper";
import PaginationButtons from "../components/PaginationButtons";

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
    width: "35%",
    padding: 5,
    backgroundColor: "#f9c2ff",
  },
});

const getPaginationButtonOpacity = (isActive) => {
  if (!isActive) {
    return { opacity: 0 };
  }
  return {};
};

const HomeScreen = () => {
  const [page, setPage] = useState(1);

  const incrementPage = () => {
    setPage(page + 1);
  };
  const decrementPage = () => {
    setPage(page - 1);
  };

  const { data, error, isFetching, refetch } =
    useGetPokemonsPaginatorQuery(page);

  let isNextActive = false;
  let isPrevActive = false;
  console.log(page);

  const getPaginationButtonOpacity = (isActive) => {
    if (!isActive) {
      return { opacity: 0 };
    }
    return {};
  };

  if (!error) {
    if (!isFetching) {
      if (data.next != null) {
        isNextActive = true;
      }
      if (data.previous != null) {
        isPrevActive = true;
      }
    }
  }

  console.log(isPrevActive, isNextActive);

  let toRender = error ? (
    <Button onPress={refetch}>Refresh</Button>
  ) : isFetching ? (
    <ActivityIndicator
      size="large"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  ) : data ? (
    <View>
      <PokemonsList data={data} />
    </View>
  ) : null;

  toRender = (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={refetch}>Refresh</Button>

      <PaginationButtons
        isPrevActive={isPrevActive}
        isNextActive={isNextActive}
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
    </View>
  );

  return toRender;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>{toRender}</View>
        <PaginationButtons
          isPrevActive={isPrevActive}
          isNextActive={isNextActive}
          page={page}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
