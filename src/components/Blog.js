import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost'; // Import the BlogPost component
import './Blog.css';


const Blog = ({blogs}) => {
  return (
    <div className="blog-list-outer-wrapper">
      <h1 className="blog-list-title">some random writeups </h1>
      <div className='wrapper'>
      
      {blogs.map((post) => (
        <div className="blog-element" key={post.postId}>
          <div className='blog-card' key={post.post}>
            <h1 className='blog-title'>{post.title}</h1>
            <br></br>
          {/*<p className='summary'>{post.content.substring(0, 500)}...</p>*/}
            <div className='linker'>
          <Link className='blog-card-link' to={`/blog/${post.postId}`}>Read More</Link>
          </div>
          </div>
        </div>
        
      
        
      ))}
     </div>
    </div>
  );
};

export default Blog;
