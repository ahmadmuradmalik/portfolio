
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Portfolio from "./components/Portfolio.js"
import Blog from "./components/Blog.js"
import About from "./components/About.js"
import Navbar from './Navbar.js';
import BlogPost from "./components/BlogPost.js"
import ThreeHome from './components/ThreeHome.js';
import BlogContent from './BlogContent.js';


function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blog" element={<Blog blogs={BlogContent}/>} />
        <Route path="/blog/:postId" element={<BlogPost post={BlogContent}/>} />
      </Routes>
    </Router>
  );
}

export default App;

