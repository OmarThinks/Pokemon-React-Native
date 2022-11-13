import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  button: {
    width: "35%",
    padding: 5,
  },
  centererView: { flex: 1, justifyContent: "center", alignItems: "center" },
});

const ErrorScreen = ({ refetch, isFetching }) => {
  return (
    <View style={{ ...styles.centererView }}>
      <Text style={{ padding: 20 }}>Something went wrong ...</Text>
      <Button
        onPress={refetch}
        style={{ ...styles.button }}
        disabled={isFetching}
        loading={isFetching}
        mode={"contained-tonal"}
      >
        Refresh
      </Button>
    </View>
  );
};

export default ErrorScreen;
