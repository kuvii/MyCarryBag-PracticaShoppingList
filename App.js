import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { v4 as uuidv4 } from "uuid";
import ListItem from './components/ListItem';
import ProductInput from './components/ProductInput';

export default function App() {
  const initProduct = {
    id: uuidv4(),
    name: '',
    type: '',
    quantity: 0,
    bought: false,
  }

  const [product, setProduct] = useState(initProduct)
  const [ products, setProducts ] = useState( [] )

  const addProductHandler = ( product ) => {
    setProducts( () => [...products, product] )
  }

  return (
    <View style={styles.container}>
      <View style={styles.productInput}>
        <ProductInput
          product= {product}
          setProduct={setProduct}
          onProductAdd = { addProductHandler }
          />
      </View>
        <View style={styles.productList}>
          <ScrollView>
            { 
                products.length === 0 
                ? <Text>Aún no hay nada</Text> 
                : products.map((product, idx) =>  <ListItem key={idx + product.name} product={product}  />)
              }
            </ScrollView>
              </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3D031',
    alignItems: 'center',
  },
  productList: {
    flex: 4,
    margin: 20,
    width: '80%',
  },
  productInput: {
    marginTop: 50,
    width: "90%",
    alignItems: 'center'
  }
});
