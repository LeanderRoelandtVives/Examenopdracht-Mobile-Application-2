import { RootState } from '../store/store';

export const selectTheme = (state: RootState): 'light' | 'dark' => state.userPreferences.theme;

export const selectIsDark = (state: RootState): boolean => state.userPreferences.theme === 'dark';