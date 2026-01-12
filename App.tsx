import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { fetchProducts } from './src/api/endpoints/products'
import { Product } from './src/types/Product'

export default function App()
{
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() =>
    {
      fetchProducts().then(res => setProducts(res.products))
    }, [])

  return (
    <View style={styles.container}>
      {
        products.map(p =>
        (
          <Text key={p.id}>{p.title}</Text>
        ))
      }
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
)