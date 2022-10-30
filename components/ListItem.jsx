import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ListItem = ({ product, setProduct, reset }) => {
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
  const [newStyle, setNewStyle] = useState(styles.notBoughtItem)
  const changeItemStyle = () => {
    setProduct({...product, bought: true})
    product.bought ? setNewStyle(styles.notBoughtItem) : setNewStyle(styles.boughtItem)
    reset()
  }

  return (
    <Pressable onPress={
      () => changeItemStyle()}>
      <View style={newStyle}>
        <Text></Text>
        <View style={styles.atomContainer}>
          <Image
            style={styles.productImage}
            source={image}
          />
        </View>
        <View style={styles.atomContainer}>
          <Text style={styles.productText}>{product.name}</Text>
        </View>
        <View style={styles.atomContainer}>
          <Text style={styles.productText}>{product.quantity}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  notBoughtItem: {
    alignItems: 'center',
    backgroundColor: 'rgb(222, 142, 23)',
    borderColor: 'rgb(171, 100, 0)',
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  boughtItem: {
    alignItems: 'center',
    backgroundColor: 'rgb(243, 220, 120)',
    borderColor: 'rgb(171, 100, 0)',
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  atomContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  productImage: {
    backgroundColor: 'rgb(243, 220, 120)',
    borderColor: 'rgb(171, 100, 0)',
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    margin: 2,
    resizeMode: 'contain',
    width: 50,
  },
  productText: {
    alignSelf: 'center',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ListItem;
