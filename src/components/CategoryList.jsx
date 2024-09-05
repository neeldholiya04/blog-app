import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Chip, Box } from '@mui/material';

const CategoryList = () => {
    const categories = useSelector((state) => state.blogs.categories);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 3 }}>
            {categories.map((category) => (
                <Chip
                    key={category}
                    label={category}
                    component={RouterLink}
                    to={`/category/${category}`}
                    clickable
                />
            ))}
        </Box>
    );
};

export default CategoryList;
