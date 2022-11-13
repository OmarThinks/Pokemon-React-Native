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

const ErrorScreen = ({
  page,
  refetch,
  isPrevActive,
  isNextActive,
  incrementPage,
  decrementPage,
  isFetching,
}) => {
  return (
    <View style={{ ...styles.centererView }}>
      <Text style={{ padding: 20 }}>Something went wrong ...</Text>
      <Button
        onPress={refetch}
        style={{ ...styles.button }}
        disabled={isFetching}
        loading={isFetching}
      >
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

const LoadingScreen = () => {
  return (
    <View style={{ ...styles.centererView }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const ListScreen = ({
  data,
  page,
  isPrevActive,
  isNextActive,
  incrementPage,
  decrementPage,
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <PokemonsList data={data} navigation={navigation} />
          </View>
        </View>
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

const HomeScreen = ({ navigation }) => {
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
      isFetching={isFetching}
    />
  ) : isFetching ? (
    <LoadingScreen />
  ) : data ? (
    <ListScreen
      page={page}
      isPrevActive={isPrevActive}
      isNextActive={isNextActive}
      incrementPage={incrementPage}
      decrementPage={decrementPage}
      data={data}
      navigation={navigation}
    />
  ) : null;
  /*
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
        style={{ backgroundColor: "red" }}
      />
    </View>
  );
*/
  return toRender;
};

export default HomeScreen;
