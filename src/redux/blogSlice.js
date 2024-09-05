import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils/localStorage';

const initialState = loadState('blogs') || {
    blogs: [],
    categories: ['Technology', 'Travel', 'Food', 'Lifestyle'],
};

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
            saveState('blogs', state);
        },
        updateBlog: (state, action) => {
            const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
            if (index !== -1) {
                state.blogs[index] = action.payload;
                saveState('blogs', state);
            }
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
            saveState('blogs', state);
        },
    },
});

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
