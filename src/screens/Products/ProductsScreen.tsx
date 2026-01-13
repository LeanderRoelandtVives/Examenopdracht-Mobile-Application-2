import { router, useRouter } from 'expo-router';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native'
import type { Product } from '../../types/Product/Product'
import { useProducts } from  './../../hooks/queries/useProducts'
import { useSelector } from 'react-redux'
import { selectIsDark } from '../../selectors/userPreferencesSelector'



export default function ProductsScreen()
{
    const isDark = useSelector(selectIsDark);

    const { data, isLoading, isError } = useProducts()

    if (isLoading)
    {
      return <ActivityIndicator />;
    }

    if (isError)
    {
      return <Text>Failed to load products</Text>;
    }

  return (
    <FlatList<Product>
      style={{ backgroundColor: isDark ? '#121212' : '#fff' }}
      data={data?.products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/home/${item.id}`)}>
          <View
            style={{
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: isDark ? '#333' : '#eee',
            }}
          >
            <Text style={{ color: isDark ? '#fff' : '#000' }}>{item.title}</Text>
            <Text style={{ color: isDark ? '#ccc' : '#555' }}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
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