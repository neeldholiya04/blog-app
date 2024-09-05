import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { toggleTheme } from '../redux/themeSlice';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <IconButton color="inherit" onClick={handleThemeToggle}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
};

export default ThemeSwitcher;
