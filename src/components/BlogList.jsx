import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Box } from '@mui/material';
import BlogPost from './BlogPost';

const BlogList = ({ category }) => {
    const blogs = useSelector((state) => state.blogs.blogs);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBlogs = blogs.filter((blog) =>
        (!category || blog.category === category) &&
        (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <Box sx={{ width: '100%' }}>
            <TextField
                fullWidth
                placeholder="Search blogs"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 3 }}
            />
            {filteredBlogs.map((blog) => (
                <BlogPost key={blog.id} blog={blog} />
            ))}
        </Box>
    );
};

export default BlogList;
