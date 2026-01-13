import { SafeAreaView } from 'react-native-safe-area-context'
import ProductsScreen from '../../src/screens/Products/ProductsScreen'

export default function ProductsIndex()
{
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductsScreen />
    </SafeAreaView>
  )
}