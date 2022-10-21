import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ListItem = ({ productName, onProductRemove }) => {
  return (
    <Pressable onPress={() => onProductRemove( productName )}>
      <View style={styles.listItem}>
        <View style={styles.atomContainer}>
          <Image
            style={styles.productImage}
            source={require("../assets/basket.png")}
          />
        </View>
        <View style={styles.atomContainer}>
          <Text style={styles.productName}>{productName}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 5,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderColor: "#F7F7F7",
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  atomContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    width: 50,
    height: 50,
  },
  productName: {
    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default ListItem;
