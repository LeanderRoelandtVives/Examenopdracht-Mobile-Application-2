import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './../src/lib/queryClient'
import { Provider,useSelector } from 'react-redux'
import { store } from '../src/store/store'
import { selectTheme } from '../src/selectors/userPreferencesSelector'
import { View, StyleSheet } from 'react-native';


export default function Layout()
{
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <LayoutInner />
      </QueryClientProvider>
    </Provider>
  )
}


function LayoutInner()
{
  const theme = useSelector(selectTheme);
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fff' }]}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: isDark ? '#1e1e1e' : '#fff',
            borderTopColor: isDark ? '#333' : '#eee',
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: '#1976d2',
          tabBarInactiveTintColor: isDark ? '#888' : '#aaa',
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Cart',
            tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: true,
            title: 'Leander Roelandt',
            tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}



const styles = StyleSheet.create(
{
  container: { flex: 1 }
})