import { StyleSheet, StatusBar } from "react-native";
import RenderItem from "../Cards/PokemonCard";

const PokemonsList = ({ data }) => {
  const toReturn = data.results.map((pokemon) => (
    <RenderItem item={pokemon} key={pokemon.name} />
  ));
  return toReturn;
};

export default PokemonsList;
