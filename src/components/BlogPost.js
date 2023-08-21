import './BlogPost.css';

const BlogPost = ({ post }) => {
 
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p className="post-date">{post.date}</p>
      <div className="post-content">{post.content}</div>
    </div>
  );
};

export default BlogPost;
