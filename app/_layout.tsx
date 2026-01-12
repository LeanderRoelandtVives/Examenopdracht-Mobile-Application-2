import { Tabs } from 'expo-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './../src/lib/queryClient'

export default function Layout()
{
  return (
    <QueryClientProvider client={queryClient}>
        <Tabs>
            <Tabs.Screen name="(tabs)" options={{ title: 'Home' }} />
            <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
    </QueryClientProvider>
  )
}