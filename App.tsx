import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/lib/queryClient'
import ProductScreen from './src/screens/Products/ProductsScreen'


export default function App()
{
  return (
      <QueryClientProvider client={queryClient}>
        <ProductScreen />
      </QueryClientProvider>
    )
}

