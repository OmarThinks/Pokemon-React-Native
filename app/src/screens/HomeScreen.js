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
  button: {
    width: "35%",
    padding: 5,
    backgroundColor: "#f9c2ff",
  },
  centererView: { flex: 1, justifyContent: "center", alignItems: "center" },
});

const getPaginationButtonOpacity = (isActive) => {
  if (!isActive) {
    return { opacity: 0 };
  }
  return {};
};

const ErrorScreen = ({
  page,
  refetch,
  isPrevActive,
  isNextActive,
  incrementPage,
  decrementPage,
}) => {
  return (
    <View style={{ ...styles.centererView }}>
      <Text style={{ padding: 20 }}>Something went wrong ...</Text>
      <Button onPress={refetch} style={{ ...styles.button }}>
        Refresh
      </Button>

      <PaginationButtons
        isPrevActive={isPrevActive}
        isNextActive={isNextActive}
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
    </View>
  );
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
    <ErrorScreen
      page={page}
      isPrevActive={isPrevActive}
      isNextActive={isNextActive}
      incrementPage={incrementPage}
      decrementPage={decrementPage}
      refetch={refetch}
    />
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
    <ErrorScreen
      page={page}
      isPrevActive={isPrevActive}
      isNextActive={isNextActive}
      incrementPage={incrementPage}
      decrementPage={decrementPage}
      refetch={refetch}
    />
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
