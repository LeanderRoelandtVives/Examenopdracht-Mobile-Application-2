import { View, Text, Button, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { useRouter } from 'expo-router'
import { selectCartItems, selectTotalItems, selectSubtotal } from '../../selectors/cartSelector'

export default function ProfileScreen()
{
  const router = useRouter()
  
  const items = useSelector(selectCartItems)
  const totalItems = items.reduce(selectTotalItems)
  const subtotal = items.reduce(selectSubtotal)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text>Total items in cart: {totalItems}</Text>
      <Text>Subtotal: ${subtotal.toFixed(2)}</Text>

      <Button title="Go to Cart" onPress={() => router.push('/cart')} />
    </View>
  )
}

const styles = StyleSheet.create(
{
  container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },

    heading:
    {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    }
})