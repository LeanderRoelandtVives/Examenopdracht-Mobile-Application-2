import { Stack } from 'expo-router'

export default function HomeStack()
{
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Products' }} />
      <Stack.Screen name="[id]" options={{ title: 'Product Detail' }} />
    </Stack>
  );
}