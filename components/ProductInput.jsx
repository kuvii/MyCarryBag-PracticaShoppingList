import { useState } from "react";
import SelectDropdown from 'react-native-select-dropdown';
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

const ProductInput = ({ onProductAdd }) => {
  const initProduct = {
    id: 0,
    name: '',
    type: '',
    quantity: 0,
    bought: false,
  }
    const [product, setProduct] = useState(initProduct)

    const changeTextHandler = (value) => {
      setProduct({...product, name: value})
    }

    const changeQuantityHandler = (value) => {
      setProduct({...product, quantity: value})
    }

    const types = ["Fruit", "Vegetables", "Meat", "Fish", "Bakery"]

    const addProductHandler = () => {
      const sanitizedName = product.name.trim()
      if (sanitizedName !== ''){
        onProductAdd( sanitizedName )
      }
      setProduct({...product, name: ''})
      console.log(product)
    }
  return (
    <View style= { styles.ProductInputBackground }>
      <View style={ styles.productInput }>
      <View style={ styles.productRow } >
        <TextInput
            placeholder="Introduzca un producto"
            keyboardType="default"
            onChangeText={ changeTextHandler }
            value={ product.name }
          />
          <TextInput 
            style= { styles.quantityInput }
            placeholder="Cantidad"
            keyboardType = 'numeric'
            maxLength={2}
            onChangeText= { changeQuantityHandler }
            value= { product.quantity }
          />
        </View>
        <View style={ styles.productRow } >
        <SelectDropdown
            data={ types }
            defaultButtonText= "Select Type"
            onSelect={(selectedItem, index) => {
              setProduct({...product, type: selectedItem})
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
          />
          <Pressable 
          style= { styles.addButton }
          title= "Add"
          onPress= { addProductHandler }
          >
            <Text>Add</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  productInput: {
    flexDirection: 'column',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    width: '95%',
    padding: 10,
  },
  ProductInputBackground: {
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    borderRadius: 10,
    width: '90%',
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 'aqua',
    borderRadius: 15,
    elevation: 2,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  nameInput: {
    backgroundColor: 'White'
  },
  dropdownStyle: {
    backgroundColor: 'white'
  },
  quantityInput: {
    backgroundColor: "white",
    paddingHorizontal: 20
  }

});

export default  ProductInput