import { View, Text, Button, StyleSheet, Switch } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'expo-router'
import { selectTotalItems, selectSubtotal } from '../../selectors/cartSelector'
import { selectIsDark} from '../../selectors/userPreferencesSelector'
import { toggleTheme } from '../../store/userPreferencesSlice'


export default function ProfileScreen()
{
  const router = useRouter()
  const dispatch = useDispatch();

  const isDark = useSelector(selectIsDark);
  
  const totalItems = useSelector(selectTotalItems)
  const subtotal = useSelector(selectSubtotal)

  return (
     <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fff' }]}>
      <Text style={[styles.heading, { color: isDark ? '#fff' : '#000' }]}>Profile</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }}>Total items in cart: {totalItems}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }}>Subtotal: ${subtotal.toFixed(2)}</Text>

      <Button title="Go to Cart" onPress={() => router.push('/cart')} />

      <Text style={{ color: isDark ? '#fff' : '#000', marginTop: 16 }}>Dark Mode</Text>
      <Switch
        value={isDark}
        onValueChange=
        {() =>
          {
            dispatch(toggleTheme())
          }
        }
        thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
      />
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