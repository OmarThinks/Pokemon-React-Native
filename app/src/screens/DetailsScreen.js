import { Text } from "react-native-paper";
import { View } from "react-native";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import { useGetPokemonByNameQuery } from "../services/pokemon";

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

const DetailsScreen = ({ navigation, route }) => {
  const { name } = route.params;
  console.log(name);
  const { data, error, isFetching, refetch } = useGetPokemonByNameQuery(name);
  console.log(data);
  return (
    <View style={{ ...styles.centererView }}>
      <Text>{name}</Text>
    </View>
  );
};

export default DetailsScreen;
