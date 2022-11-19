import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import PokemonsList from "../components/Lists/PokemonList";
import { ActivityIndicator } from "react-native-paper";
import { Button } from "react-native-paper";
import PaginationButtons from "../components/PaginationButtons";
import { getPokemonIdFromURL } from "../functions/generalFunctions";

import LoadingScreen from "./CommonScreens/LoadingScreen";
import ErrorScreen from "./CommonScreens/ErrorScreen";

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
  },
  centererView: { flex: 1, justifyContent: "center", alignItems: "center" },
});

const ListScreen = ({
  data,
  page,
  isPrevActive,
  isNextActive,
  incrementPage,
  decrementPage,
  navigation,
  isFetching,
}) => {
  const activityIndicator = isFetching ? (
    <View style={{ ...styles.centererView }}>
      <ActivityIndicator size={"large"} />
    </View>
  ) : (
    <></>
  );

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
  const [page, setPage] = useState(1);
  const incrementPage = () => {
    setPage(page + 1);
  };
  const decrementPage = () => {
    setPage(page - 1);
  };

  const { data, error, isFetching, refetch, isLoading } =
    useGetPokemonsPaginatorQuery(page);

  let isNextActive = false;
  let isPrevActive = false;

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

  let toRender = error ? (
    <ErrorScreen refetch={refetch} isFetching={isFetching} />
  ) : isLoading ? (
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
      isFetching={isFetching}
    />
  ) : null;

  return toRender;
};

export default HomeScreen;
