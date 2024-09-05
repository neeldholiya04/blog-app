import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils/localStorage';

const initialState = loadState('theme') || {
    isDarkMode: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            saveState('theme', state);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
