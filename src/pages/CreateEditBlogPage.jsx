import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, TextField, Button, Box, MenuItem, Chip } from '@mui/material';
import RichTextEditor from '../components/RichTextEditor';
import { addBlog, updateBlog } from '../redux/blogSlice';

const CreateEditBlogPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.blogs.categories);
    const existingBlog = useSelector((state) => state.blogs.blogs.find((b) => b.id === id));

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    useEffect(() => {
        if (existingBlog) {
            setTitle(existingBlog.title);
            setContent(existingBlog.content);
            setCategory(existingBlog.category);
            setTags(existingBlog.tags || []);
        }
    }, [existingBlog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            id: id || Date.now().toString(),
            title,
            content,
            category,
            tags,
            date: new Date().toISOString(),
        };

        if (id) {
            dispatch(updateBlog(blog));
        } else {
            dispatch(addBlog(blog));
        }

        navigate('/');
    };

    const handleAddTag = () => {
        if (newTag && !tags.includes(newTag)) {
            setTags([...tags, newTag]);
            setNewTag('');
        }
    };

    const handleDeleteTag = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete));
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography variant="h4" gutterBottom>
                {id ? 'Edit Blog' : 'Create New Blog'}
            </Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Blog Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                select
                id="category"
                label="Category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                {categories.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Tags
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {tags.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            onDelete={() => handleDeleteTag(tag)}
                        />
                    ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag"
                    />
                    <Button onClick={handleAddTag} sx={{ ml: 1 }}>
                        Add
                    </Button>
                </Box>
            </Box>
            <Box mt={2} mb={2}>
                <RichTextEditor value={content} onChange={setContent} />
            </Box>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                {id ? 'Update Blog' : 'Create Blog'}
            </Button>
        </Box>
    );
};

export default CreateEditBlogPage;
