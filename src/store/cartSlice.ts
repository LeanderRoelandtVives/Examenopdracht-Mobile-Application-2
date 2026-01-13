import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Product } from '../types/Product';

interface CartProduct extends Product
{
  quantity: number;
}

interface CartState
{
  items: CartProduct[];
  favorites: Product[];
  theme: 'light' | 'dark';
}




const initialState: CartState =
{
  items: [],
  favorites: [],
  theme: 'light',
}


const cartSlice = createSlice(
{
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) =>
        {
            const product = action.payload
            const existingItem = state.items.find((item) => item.id === product.id)

            if (existingItem)
            {
                existingItem.quantity = (existingItem.quantity || 1) + 1
            }
            else
            {
                state.items.push(
                {
                    ...product,
                    quantity: 1,
                })
            }
        },

        removeFromCart: (state, action) =>
        {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

        updateCartItemQuantity: (state, action) =>
        {
            const { id, quantity } = action.payload

            const item = state.items.find((item) => item.id === id);

            if (item)
            {
                item.quantity = Math.max(1, quantity)
            }
        }
    },
})

export const
{
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;