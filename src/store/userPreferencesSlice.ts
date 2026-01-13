import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserPreferencesState } from '../types/UserPreference/UserPreferencesState'


const initialState: UserPreferencesState =
{
  theme: 'light',
};

const userPreferencesSlice = createSlice(
{
  name: 'userPreferences',
  initialState,
  reducers:
  {
    toggleTheme: (state) =>
    {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },

    setTheme: (state, action: PayloadAction<'light' | 'dark'>) =>
    {
      state.theme = action.payload;
    },
  },
})

export const { toggleTheme, setTheme } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;