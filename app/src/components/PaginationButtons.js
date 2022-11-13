import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import PokemonsList from "../components/Lists/PokemonList";
import { ActivityIndicator } from "react-native-paper";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
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
  },
  centererView: { flex: 1, justifyContent: "center", alignItems: "center" },
});

const getPaginationButtonOpacity = (isActive) => {
  if (!isActive) {
    return { opacity: 0 };
  }
  return {};
};
const PaginationButtons = ({
  isPrevActive,
  isNextActive,
  page,
  incrementPage,
  decrementPage,
}) => {
  return (
    <View style={{ ...styles.buttonsContainer }}>
      <Button
        style={{
          ...styles.paginationButton,
          ...getPaginationButtonOpacity(isPrevActive),
        }}
        onPress={decrementPage}
        disabled={!isPrevActive}
        mode={"contained-tonal"}
      >
        Previous
      </Button>

      <View style={{ ...styles.centererView }}>
        <Text>Page: {page}</Text>
      </View>
      <Button
        style={{
          ...styles.paginationButton,
          ...getPaginationButtonOpacity(isNextActive),
        }}
        onPress={incrementPage}
        disabled={!isNextActive}
        mode={"contained-tonal"}
      >
        Next
      </Button>
    </View>
  );
};

export default PaginationButtons;
