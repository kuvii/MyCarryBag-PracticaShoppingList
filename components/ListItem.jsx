import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ListItem = ({ product }) => {
  let image
  switch(product.type.toLowerCase()){
    case "fruit":
      image = require("../assets/foodTypes/fruit.png")
    break
    case "vegetable":
      image = require("../assets/foodTypes/vegetable.png")
    break
    case "meat":
      image = require("../assets/foodTypes/meat.png")
    break
    case "fish":
      image = require("../assets/foodTypes/fish.png")
    break
    case "bakery":
      image = require("../assets/foodTypes/bakery.png")
    break
  }
  
  return (
    // <Pressable onPress={}>
      <View style={styles.listItem}>
        <View style={styles.atomContainer}>
          <Image
            style={styles.productImage}
            source={image}
          />
        </View>
        <View style={styles.atomContainer}>
          <Text style={styles.productName}>{product.name}</Text>
        </View>
      </View>
    // </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    alignItems: 'center',
    borderColor: '#F7F7F7',
    borderWidth: 3,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  atomContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  productImage: {
    height: 50,
    resizeMode: 'contain',
    width: 50,
  },
  productName: {
    alignSelf: 'center',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ListItem;
