import { View, Text } from "react-native";
import { StyleSheet, StatusBar } from "react-native";

const PokemonCard = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default PokemonCard;
