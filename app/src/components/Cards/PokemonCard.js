import { View, Text } from "react-native";
import { StyleSheet, StatusBar } from "react-native";
import { Card } from "react-native-paper";
const PokemonCard = ({ item, navigation }) => {
  return (
    <Card style={styles.item} onPress={() => navigation.navigate("Details")}>
      <Text style={styles.title}>{item.name}</Text>
    </Card>
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
