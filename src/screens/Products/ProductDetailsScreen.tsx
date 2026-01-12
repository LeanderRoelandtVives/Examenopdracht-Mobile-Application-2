import { View, Text, ActivityIndicator } from "react-native"
import { useProduct } from './../../hooks/queries/useProduct'
import { Product } from "../../types/Product"
import { useLocalSearchParams } from 'expo-router'


export default function ProductDetailScreen()
{
  const { id } = useLocalSearchParams<{ id: string }>()
  const productId = Number(id);

  const { data, isLoading, isError } = useProduct(productId)

  if (isLoading)
    {
        return <ActivityIndicator/>;
    }

  if (isError || !data)
    {
    return (
      <View>
        <Text>Failed to load product.</Text>
      </View>
    )
  }

  const product: Product = data;

  return (
    <View>
      <Text>{product.title}</Text>
      <Text>${product.price}</Text>
      <Text>{product.thumbnail}</Text>
    </View>
  )
}