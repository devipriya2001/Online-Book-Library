import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/">Home</Link>  |  <Link to="/browse">Browse Books</Link>   |  <Link to="/add">Add Book</Link>
    </nav>
  );
}

export default Navbar;
