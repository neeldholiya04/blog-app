import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';

const BlogPost = ({ blog }) => {
    // Function to strip HTML tags from content
    const stripHtml = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || " ";
    };

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
                {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                {new Date(blog.date).toLocaleDateString()} | {blog.category}
            </Typography>
            <Typography component="pre" sx={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap', mb: 2 }}>
                {stripHtml(blog.content)}
            </Typography>
            <Button color="primary" component={RouterLink} to={`/blog/${blog.id}`}>
                READ MORE
            </Button>
        </Box>
    );
};

export default BlogPost;
