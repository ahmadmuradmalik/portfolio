import React from 'react';
import BlogPost from './BlogPost'; // Import the BlogPost component
import './Blog.css';

const posts = [
  { id: 1, title: 'Post 1', date: '2023-08-20', content: 'This is the content of post 1.' },
  { id: 2, title: 'Post 2', date: '2023-08-21', content: 'This is the content of post 2.' },
];

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
