import { Text } from "react-native-paper";
import { View } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
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
  title: {
    fontSize: 32,
    padding: 20,
  },

  centererView: { flex: 1, justifyContent: "center", alignItems: "center" },

  mainImage: { width: "100%", height: 300 },
});

/*
abilities
moves
name
stats
types

*/

const DetailsScreen = ({ navigation, route }) => {
  const { name, url } = route.params;
  const id = getPokemonIdFromURL(url);
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  console.log(name);
  console.log(url);
  const { data, error, isFetching, refetch } = useGetPokemonsByIdQuery(id);
  console.log(`data ${data}`);

  let ScreenWidth = Dimensions.get("window").width;
  console.log(ScreenWidth);

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ScrollView
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View>
            <Image
              style={{ ...styles.mainImage, width: ScreenWidth - 40 }}
              source={{
                uri: imageURL,
              }}
              resizeMode={"contain"}
              resizeMethod={"auto"}
            />
          </View>
          <Text style={{ ...styles.title }}>Name:</Text>

          <Text>{name}</Text>
          <Text style={{ ...styles.title }}>Name:</Text>

          <Text>{name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
