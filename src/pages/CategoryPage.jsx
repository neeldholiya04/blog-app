import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import BlogList from '../components/BlogList';
import CategoryList from '../components/CategoryList';

const CategoryPage = () => {
    const { category } = useParams();

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h4" gutterBottom>
                {category} Blogs
            </Typography>
            <CategoryList />
            <BlogList category={category} />
        </Box>
    );
};

export default CategoryPage;
