import React from 'react';
import { Typography, Box } from '@mui/material';
import BlogList from '../components/BlogList';
import CategoryList from '../components/CategoryList';

const HomePage = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: '100%' }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                Featured Blogs
            </Typography>
            <CategoryList />
            <BlogList />
        </Box>
    );
};

export default HomePage;
