import { configureStore } from '@reduxjs/toolkit';
import cartReducers from "../store/cartSlice";
import userPreferencesReducer from "../store/userPreferencesSlice";

export const store = configureStore(
{
  reducer:
  {
    cart: cartReducers,
    userPreferences: userPreferencesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;