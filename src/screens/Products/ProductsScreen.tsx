import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native'
import type { Product } from './../../types/Product'
import { useProducts } from  './../../hooks/queries/useProducts'



export default function ProductsScreen()
{
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
        data={data?.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
        (
            
                <View style={{ padding: 16, borderBottomWidth: 1 }}>
                    <Text>{item.title}</Text>
                    <Text>${item.price}</Text>
                </View>
            
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