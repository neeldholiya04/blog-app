import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import CreateEditBlogPage from './pages/CreateEditBlogPage';

function App() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
                    <Header />
                    <Box component="main" sx={{ flexGrow: 1, width: '100%', overflowX: 'hidden', padding: { xs: 2, sm: 3, md: 4 } }}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/category/:category" element={<CategoryPage />} />
                            <Route path="/blog/:id" element={<BlogDetailsPage />} />
                            <Route path="/create" element={<CreateEditBlogPage />} />
                            <Route path="/edit/:id" element={<CreateEditBlogPage />} />
                        </Routes>
                    </Box>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
