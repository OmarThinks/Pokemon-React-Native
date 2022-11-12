import { View, Text } from "react-native";
import { store } from "./app/store";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

const Home = () => {
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

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </Provider>
  );
}
