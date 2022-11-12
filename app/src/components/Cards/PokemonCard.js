import { View, Text } from "react-native";
import { StyleSheet, StatusBar } from "react-native";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const RenderItem = ({ item }) => <Item title={item.name} />;

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

export default RenderItem;
