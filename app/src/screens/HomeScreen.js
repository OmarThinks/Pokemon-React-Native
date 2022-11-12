import { View, Text } from "react-native";
import { useGetPokemonByNameQuery } from "../services/pokemon";

const HomeScreen = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>
  );
};

export default HomeScreen;
