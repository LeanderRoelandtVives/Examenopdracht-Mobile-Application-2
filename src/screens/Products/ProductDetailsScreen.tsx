import { View, Text, ActivityIndicator, Button, Image } from "react-native"
import { useProduct } from './../../hooks/queries/useProduct'
import { Product } from "../../types/Product/Product"
import { useLocalSearchParams } from 'expo-router'
import { useDispatch, useSelector  } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { selectIsDark } from '../../selectors/userPreferencesSelector'



export default function ProductDetailScreen()
{
  const { id } = useLocalSearchParams<{ id: string }>()
  const productId = Number(id);

  const { data, isLoading, isError } = useProduct(productId)

  const isDark = useSelector(selectIsDark)

  if (isLoading)
    {
        return <ActivityIndicator/>;
    }

  if (isError || !data)
    {
    return (
      <View style={{ flex: 1, backgroundColor: isDark ? '#121212' : '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: isDark ? '#fff' : '#000' }}>Failed to load product.</Text>
      </View>
    )
  }

  const product: Product = data;

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#121212' : '#fff', padding: 16 }}>
      <Text style={{ color: isDark ? '#fff' : '#000', fontSize: 18, fontWeight: 'bold' }}>
        {product.title}
      </Text>
      <Text style={{ color: isDark ? '#ccc' : '#555', marginBottom: 12 }}>
        ${product.price}
      </Text>
      <Image
        source={{ uri: product.thumbnail }}
        style={{ width: 200, height: 200, marginBottom: 16 }}
      />
      <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
    </View>
  )
}