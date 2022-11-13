import { View, Text } from "react-native";
import { StyleSheet, StatusBar } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

const PokemonCard = ({ item, navigation }) => {
  return (
    <Card
      style={styles.item}
      onPress={() => navigation.navigate("Details", item)}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Avatar.Icon icon="folder" />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    padding: 20,
  },
});

export default PokemonCard;
