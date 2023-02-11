import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      this is navbar
      <Link to='/' > Blogs</Link>
      <Link to="/userPost">My Post</Link>
      <Link to="/createPost">Create A Post</Link>
    </div>
  );
};

export default Navbar;