import { configureStore } from '@reduxjs/toolkit';
import cartReducers from "../store/cartSlice";

export const store = configureStore(
{
  reducer:
  {
    cart: cartReducers,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;