import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './../src/lib/queryClient'

export default function Layout()
{
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="home"
          options={{ 
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Cart',
            tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />
          }}
        />
      </Tabs>
    </QueryClientProvider>
  )
}