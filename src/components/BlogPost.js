import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';
import LaTeX from './LaTeX'; // Assuming LaTeX component is in the same directory

const BlogPost = ({ post }) => {
  const { postId } = useParams();
  const posts = post.find(b => b.postId.toString() === postId);

  if (!posts) return <p>Blog Post not found</p>

  return (
    <>
        <div className="blog-post">
            <h2 className='blogpost-title'>{posts.title}</h2>
            {/*<div className="test-latex">
            <LaTeX>{'\\int_{0}^{1} x^2 dx'}</LaTeX>
            </div>*/}
            <p className="post-date">{posts.date}</p>
            <div className='blog-text-wrapper'>
                {posts.content.split('\n').map((line, index) => 
                    line.startsWith('$$') 
                        ? <div className='omgpls'>
                          <LaTeX key={`latex-${index}`}>
                          {line.slice(2, -2)}
                          </LaTeX> 
                          <br /></div>
                        
                        : <React.Fragment key={`text-${index}`}>
                            {line}
                            <br />
                          </React.Fragment>
                )}
            </div>
                
            
        </div>
    </>
  );
};

export default BlogPost;


