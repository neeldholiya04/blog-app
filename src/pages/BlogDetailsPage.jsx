import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { deleteBlog } from '../redux/blogSlice';

const BlogDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blogs.blogs.find((b) => b.id === id));

    if (!blog) {
        return <Typography>Blog not found</Typography>;
    }

    const handleDelete = () => {
        dispatch(deleteBlog(id));
        navigate('/');
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                {blog.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {new Date(blog.date).toLocaleDateString()} | {blog.category}
            </Typography>
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: blog.content }} />
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={() => navigate(`/edit/${id}`)} sx={{ mr: 1 }}>
                    Edit
                </Button>
                <Button variant="contained" color="error" onClick={handleDelete}>
                    Delete
                </Button>
            </Box>
        </Box>
    );
};

export default BlogDetailsPage;
