# Blog Application

## Table of Contents
1. [Introduction](#introduction)
2. [Live Demo](#live-demo)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [Component Breakdown](#component-breakdown)
7. [State Management](#state-management)
8. [Routing](#routing)
9. [Setup Instructions](#setup-instructions)
10. [Building for Production](#building-for-production)
11. [Usage Guide](#usage-guide)

## Introduction

This is a React-based blog application that allows users to create, read, update, and delete blog posts. It features a clean, responsive design with Material-UI components, efficient state management with Redux, and a rich text editor for content creation.

## Live Demo

Experience the Blog Application in action! Visit our live demo:

[**Blog Application Live Demo**](https://blog-app-nu-rose.vercel.app/)

Feel free to explore the features, create sample posts, and test the functionality. The demo showcases the application's responsive design, intuitive user interface, and seamless blog management capabilities.

## Features

- Create, read, update, and delete blog posts
- Rich text editor for blog content creation and editing
- Category-based filtering of blog posts
- Full-text search functionality
- Light and dark mode toggle for user preference
- Responsive design for various screen sizes
- Local storage persistence for blog data

## Technologies Used

- React 18
- Redux Toolkit for state management
- Material-UI (MUI) for styling and UI components
- React Router for navigation
- React Quill for rich text editing
- Vite as the build tool and development server

## Project Structure

```
blog-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BlogList.jsx
│   │   ├── BlogPost.jsx
│   │   ├── CategoryList.jsx
│   │   ├── Header.jsx
│   │   ├── RichTextEditor.jsx
│   │   └── ThemeSwitcher.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── BlogDetailsPage.jsx
│   │   └── CreateEditBlogPage.jsx
│   ├── redux/
│   │   ├── store.js
│   │   ├── blogSlice.js
│   │   └── themeSlice.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Component Breakdown

### App.jsx
The main component that sets up routing and the overall layout of the application.

### HomePage.jsx
Displays a list of all blog posts and categories.

### CategoryPage.jsx
Shows blog posts filtered by a specific category.

### BlogDetailsPage.jsx
Displays the full content of a single blog post.

### CreateEditBlogPage.jsx
A form for creating new blog posts or editing existing ones.

### BlogList.jsx
Renders a list of blog post previews.

### BlogPost.jsx
Represents a single blog post in the list view.

### CategoryList.jsx
Displays a list of blog categories for filtering.

### Header.jsx
The application header with navigation links and theme toggle.

### RichTextEditor.jsx
A wrapper component for the React Quill rich text editor.

### ThemeSwitcher.jsx
A toggle button for switching between light and dark themes.

## State Management

The application uses Redux Toolkit for state management. There are two main slices:

1. `blogSlice.js`: Manages the state of blog posts, including CRUD operations.
2. `themeSlice.js`: Handles the theme state (light/dark mode).

The `store.js` file combines these slices and sets up the Redux store.

## Routing

React Router is used for navigation. The main routes are:

- `/`: Home page with all blog posts
- `/category/:category`: Blog posts filtered by category
- `/blog/:id`: Individual blog post view
- `/create`: Create new blog post
- `/edit/:id`: Edit existing blog post

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/neeldholiya04/blog-app.git
   cd blog-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Building for Production

To create a production build, run:

```
npm run build
```

The built files will be in the `dist` directory.

## Usage Guide

1. **Viewing Blog Posts**: The home page displays all blog posts. Click on a post title to view its full content.

2. **Creating a New Post**:
    - Click "CREATE POST" in the header.
    - Fill in the title, content, and select a category.
    - Use the rich text editor to format your content.
    - Click "Create Blog" to publish.

3. **Editing a Post**:
    - Navigate to a blog post.
    - Click the "Edit" button.
    - Modify the content in the form.
    - Click "Update Blog" to save changes.

4. **Deleting a Post**:
    - Navigate to a blog post.
    - Click the "Delete" button.
    - Confirm the deletion.

5. **Filtering by Category**:
    - Click on a category chip on the home page to view posts in that category.

6. **Searching Posts**:
    - Use the search bar at the top of the blog list to find posts by title or content.

7. **Changing Themes**:
    - Click the theme toggle button in the header to switch between light and dark modes.
