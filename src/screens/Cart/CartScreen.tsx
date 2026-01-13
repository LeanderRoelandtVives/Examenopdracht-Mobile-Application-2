import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { updateCartItemQuantity, removeFromCart} from '../../store/cartSlice';

export default function CartScreen()
{
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const renderItem = ({ item }: any) =>
    (
        <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>${item.price}</Text>

        <View style={styles.row}>
            <Button
            title="-"
            onPress={() =>
                dispatch(
                updateCartItemQuantity({ id: item.id, quantity: item.quantity - 1 })
                )
            }
            />
            <Text style={styles.qty}>{item.quantity}</Text>
            <Button
            title="+"
            onPress={() =>
                dispatch(
                updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 })
                )
            }
            />
            <Button title="Remove" onPress={() => dispatch(removeFromCart(item.id))} />
        </View>
        </View>
    )

    if (items.length === 0)
        return (
        <View style={styles.empty}>
            <Text>Your cart is empty</Text>
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