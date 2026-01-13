import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { updateCartItemQuantity, removeFromCart} from '../../store/cartSlice'
import { selectCartItems, selectTotalItems, selectSubtotal } from '../../selectors/cartSelector'
import { selectIsDark } from '../../selectors/userPreferencesSelector'



export default function CartScreen()
{
    const dispatch = useDispatch()

    const isDark = useSelector(selectIsDark)

    const items = useSelector(selectCartItems)
    const totalItems = useSelector(selectTotalItems)
    const subtotal = useSelector(selectSubtotal)

  const renderItem = ({ item }: any) =>
    (
    <View style={[styles.item, { borderBottomColor: isDark ? '#333' : '#ccc' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>{item.title}</Text>
      <Text style={{ color: isDark ? '#ccc' : '#000' }}>${item.price}</Text>
      <View style={styles.row}>
        <Button
          title="-"
          onPress={() =>
            dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity - 1 }))
          }
        />
        <Text style={[styles.qty, { color: isDark ? '#fff' : '#000' }]}>{item.quantity}</Text>
        <Button
          title="+"
          onPress={() =>
            dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 }))
          }
        />
        <Button title="Remove" onPress={() => dispatch(removeFromCart(item.id))} />
      </View>
    </View>
    )

    if (items.length === 0)
        return (
        <View style={[styles.empty, { backgroundColor: isDark ? '#121212' : '#fff' }]}>
            <Text style={{ color: isDark ? '#fff' : '#000' }}>Your cart is empty</Text>
        </View>
        )

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View style={styles.footer}>
        <Text>Total items: {totalItems}</Text>
        <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        padding: 16
    },
    item:
    {
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8
    },
    title:
    {
        fontWeight: 'bold',
        marginBottom: 4
    },
    row:
    {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8, marginTop: 4
    },
    qty:
    {
        marginHorizontal: 8
    },
    footer:
    {
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 8
    },
    empty:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})