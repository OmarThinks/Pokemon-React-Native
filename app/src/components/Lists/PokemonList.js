import { StyleSheet, StatusBar } from "react-native";
import PokemonCard from "../Cards/PokemonCard";

const PokemonsList = ({ data, navigation }) => {
  const toReturn = data.results.map((pokemon) => (
    <PokemonCard item={pokemon} key={pokemon.name} navigation={navigation} />
  ));
  return toReturn;
};

export default PokemonsList;
