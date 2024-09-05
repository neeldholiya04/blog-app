import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    return (
        <AppBar position="static" sx={{ width: '100vw' }}>
            <Toolbar sx={{ width: '100%', justifyContent: 'space-between', px: { xs: 2, sm: 3, md: 4 } }}>
                <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    Blog App
                </Typography>
                <Box>
                    <Button color="inherit" component={RouterLink} to="/">
                        HOME
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/create">
                        CREATE POST
                    </Button>
                    <ThemeSwitcher />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
