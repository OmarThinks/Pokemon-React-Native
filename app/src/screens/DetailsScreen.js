import { Text } from "react-native-paper";
import { View } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { useGetPokemonsByIdQuery } from "../services/pokemon";
import { getPokemonIdFromURL } from "../functions/generalFunctions";
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

  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  mainImage: { width: "100%", height: 300 },
});

const DetailsScreen = ({ navigation, route }) => {
  const { name, url } = route.params;
  const id = getPokemonIdFromURL(url);
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  console.log(name);
  console.log(url);
  const { data, error, isFetching, refetch } = useGetPokemonsByIdQuery(id);
  console.log(`data ${data}`);
  return (
    <View style={{ ...styles.centererView }}>
      <Text>{name}</Text>

      <Image
        style={styles.mainImage}
        source={{
          uri: imageURL,
        }}
        resizeMode={"contain"}
        resizeMethod={"auto"}
      />
    </View>
  );
};

export default DetailsScreen;
