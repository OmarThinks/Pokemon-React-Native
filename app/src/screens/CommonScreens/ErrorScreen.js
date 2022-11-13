import { View, Text } from "react-native";
import { useGetPokemonsPaginatorQuery } from "../services/pokemon";
import { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import PokemonsList from "../components/Lists/PokemonList";
import { ActivityIndicator } from "react-native-paper";
import { Button } from "react-native-paper";
import PaginationButtons from "../components/PaginationButtons";
import { getPokemonIdFromURL } from "../functions/generalFunctions";

const styles = StyleSheet.create({
  button: {
    width: "35%",
    padding: 5,
  },
  centererView: { flex: 1, justifyContent: "center", alignItems: "center" },
});

const ErrorScreen = ({
  refetch,

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
        mode={"contained-tonal"}
      >
        Refresh
      </Button>
    </View>
  );
};

export default ErrorScreen;
