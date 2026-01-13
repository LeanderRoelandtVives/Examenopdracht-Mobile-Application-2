import { View, Text, ActivityIndicator, Button, Image } from "react-native"
import { useProduct } from './../../hooks/queries/useProduct'
import { Product } from "../../types/Product"
import { useLocalSearchParams } from 'expo-router'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';



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

  const dispatch = useDispatch();

  return (
    <View>
      <Text>{product.title}</Text>
      <Text>${product.price}</Text>
      <Image source={{ uri: product.thumbnail }} style={{ width: 200, height: 200 }} />

      <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
    </View>
  )
}