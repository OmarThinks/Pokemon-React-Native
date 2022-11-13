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
import Unorderedlist from "react-native-unordered-list";

import ErrorScreen from "./CommonScreens/ErrorScreen";
import LoadingScreen from "./CommonScreens/LoadingScreen";

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
    fontSize: 40,
    paddingTop: 30,
  },
  paragraphContainer: {
    paddingLeft: 15,
  },
  paragraph: {
    fontSize: 26,
  },

  centererView: { flex: 1, justifyContent: "center", alignItems: "center" },

  mainImage: { width: "100%", height: 300 },
});

/*
abilities
moves
name (V)
stats
types
*/

const Abilities = (data) => {
  return <Text>Ablities</Text>;
};

const DisplayDetailsScreen = ({ data }) => {
  let ScreenWidth = Dimensions.get("window").width;
  const id = data.id;
  const name = data.name;

  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

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

          <View>
            <Text style={{ ...styles.title }}>Name:</Text>
            <View style={{ ...styles.paragraphContainer }}>
              <Unorderedlist style={{ ...styles.paragraph }}>
                <Text style={{ ...styles.paragraph }}>{name}</Text>
              </Unorderedlist>
            </View>

            <Text style={{ ...styles.title }}>Abilities:</Text>
            <Abilities data={data} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailsScreen = ({ navigation, route }) => {
  const { url } = route.params;
  const id = getPokemonIdFromURL(url);

  const { data, error, isFetching, refetch, isLoading } =
    useGetPokemonsByIdQuery(id);
  console.log(`data ${data}`);

  let toRender = error ? (
    <ErrorScreen refetch={refetch} isFetching={isFetching} />
  ) : isLoading ? (
    <LoadingScreen />
  ) : data ? (
    <DisplayDetailsScreen data={data} />
  ) : null;

  return toRender;
};

export default DetailsScreen;
