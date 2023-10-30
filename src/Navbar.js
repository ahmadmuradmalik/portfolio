import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'black', padding: '10px' }}>
      {/*<Link to="/" style={{ color: 'white', marginRight: '10px' }}>Bruh</Link>*/}
      <Link to="/about" style={{ color: 'white', marginRight: '10px' }}>About</Link>
      <Link to="/portfolio" style={{ color: 'white', marginRight: '10px' }}>Portfolio</Link>
      <Link to="/blog" style={{ color: 'white', marginRight: '10px' }}>blog</Link>
    </nav>
  );
}

export default Navbar;
