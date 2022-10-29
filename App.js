import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ListItem from './components/ListItem';
import ProductInput from './components/ProductInput';

export default function App() {
  const [ products, setProducts ] = useState( [] )

  const addProductHandler = ( product ) => {
    setProducts( () => [...products, product] )
  }

  // const removeProductHandler = (productName) => {
  //   setProduct(() => products.filter((product) => product !== productName))
  // }

  return (
    <View style={styles.container}>
        <ProductInput
          onProductAdd = { addProductHandler }
        />
        <View style={styles.productList}>
          <ScrollView>
            { 
                products.length === 0 
                ? <Text>Aún no hay nada</Text> 
                : products.map((product, idx) =>  <ListItem key={idx + product.name} product={product} />)
              }
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  productList: {
    flex: 4,
    margin: 20,
    width: '80%',
  }
});
