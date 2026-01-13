import { createSlice } from '@reduxjs/toolkit'

const initialState =
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
        addToCart: (state, action) =>
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
        },

        clearCart: (state) =>
        {
            state.items = [];
        },

        addToFavorites: (state, action) =>
        {
            const product = action.payload

            const exists = state.favorites.find((item) => item.id === product.id)

            if (!exists)
                {
                state.favorites.push(product)
            }
        },

        removeFromFavorites: (state, action) =>
        {
            state.favorites = state.favorites.filter((item) => item.id !== action.payload)
        },

        toggleTheme: (state) =>
        {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },

        setTheme: (state, action) =>
        {
            state.theme = action.payload;
        },
    },
    }
)

export const
{
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  addToFavorites,
  removeFromFavorites,
  toggleTheme,
  setTheme,
} = cartSlice.actions;

export default cartSlice.reducer;