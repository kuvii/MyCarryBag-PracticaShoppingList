import { useRef, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

const ProductInput = ({ product, setProduct, onProductAdd }) => {

  const dropdownRef = useRef({})

    const changeTextHandler = (value) => {
      setProduct({...product, name: value})
    }

    const changeQuantityHandler = (value) => {
      setProduct({...product, quantity: value})
    }

    const types = ["Fruit", "Vegetable", "Meat", "Fish", "Bakery"]

    const addProductHandler = () => {
      const sanitizedName = product.name.trim()
      changeTextHandler(sanitizedName)
      if (sanitizedName !== ''){
        onProductAdd( product )
      }
      setProduct({...product, name: '', quantity: 0, type: ''})
      dropdownRef.current.reset()
    }
  return (
    <View style= { styles.ProductInputBackground }>
      <View style={ styles.productInput }>
        <View style={ styles.productRow } >
          <TextInput
              style={styles.nameInput}
              placeholder='Introduzca un producto'
              placeholderTextColor='black'
              keyboardType='default'
              onChangeText={ changeTextHandler }
              value={ product.name }
            />
          <TextInput
              style= { styles.quantityInput }
              placeholder='Cantidad'
              placeholderTextColor='black'
              keyboardType = 'numeric'
              maxLength={2}
              onChangeText= { changeQuantityHandler }
              value= { product.quantity }
          />
        </View>
        <View style={ styles.productRow } >

          <SelectDropdown
              data={ types }
              ref = {dropdownRef}
              buttonStyle= {styles.dropdownButtonStyle}
              rowStyle={styles.dropdownRowStyle}
              dropdownOverlayColor= {styles.overlayColor}
              defaultButtonText= 'Select Type'
              onSelect={(selectedItem, index) => {
                setProduct({...product, type: selectedItem})
              }}
              buttonTextAfterSelection={(selectedItem, index) => { return selectedItem }}
              rowTextForSelection={(item, index) => {
                return item
              }}

            />
            <Pressable 
            style= { styles.addButton } 
            title= "Add" 
            onPress= { addProductHandler }>
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
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    width: '100%',
  },
  ProductInputBackground: {
    backgroundColor: 'rgba(200, 66, 16, 0.5)',
    borderRadius: 10,
    borderColor: 'rgb(171, 100, 0)',
    borderWidth: 2,
    width: '90%',
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 'rgb(0, 255, 255)',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
  nameInput: {
    borderBottomColor: 'rgb(0, 255, 255)',
    borderLeftColor: 'rgba(200, 66, 16, 0)',
    borderRightColor: 'rgba(200, 66, 16, 0)',
    borderTopColor: 'rgba(200, 66, 16, 0)',
    borderWidth: 1,
  },
  quantityInput: {
    borderBottomColor: 'rgb(0, 255, 255)',
    borderLeftColor: 'rgba(200, 66, 16, 0)',
    borderRightColor: 'rgba(200, 66, 16, 0)',
    borderTopColor: 'rgba(200, 66, 16, 0)',
    borderWidth: 1,
    width: 95
  },
  dropdownButtonStyle: {
    backgroundColor: 'rgb(0, 255, 255)',
    borderColor: 'rgb(0, 190, 255)',
    borderWidth: 2,
    borderRadius: 5,
    width: 145,
  },
  dropdownRowStyle: {
    backgroundColor: 'rgb(0, 255, 255)',
    borderBottomColor: "#444",
  },
});

export default  ProductInput