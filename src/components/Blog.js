import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost'; // Import the BlogPost component
import './Blog.css';


const Blog = ({blogs}) => {
  return (
    <div className="blog-list-outer-wrapper">
      <h1 className="blog-list-title">Hi, welcome to my thing!!</h1>
      <ul>
      {blogs.map((post) => (
        <li className="blog-element" key={post.postId}>
          <div className='blog-card' key={post.post}>
            <h1 className='blog-title'>{post.title}</h1>
            <br></br>
          {/*<p className='summary'>{post.content.substring(0, 500)}...</p>*/}
            <div className='linker'>
          <Link className='blog-card-link' to={`/blog/${post.postId}`}>Read More</Link>
          </div>
          </div>
        </li>
      
        
      ))}
      </ul> 
    </div>
  );
};

export default Blog;
