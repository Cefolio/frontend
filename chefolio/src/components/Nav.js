import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      {localStorage.getItem('token') ? 
        <Link to="/chef-dashboard">Chef Dashboard</Link>
        :
        <Link to="/">Home</Link>
      }

      <Link to="/register">Register</Link>

      {localStorage.getItem('token') ? 
        <Link to="/" onClick={() => localStorage.clear()}>Logout</Link>
        :
        <Link to="/login">Login</Link>
      }
    </div>
  )
}

export default Nav;