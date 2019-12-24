// create a fetchChef action in actions
// create a chef and isFetching state for initialState in reducers

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChef } from '../actions/actions';
// Change to index.scss
import "../css/Nav.scss";

const Nav = props => {

  const [chef, setChef] = useState(props.chef)

  useEffect(() => {
    props.fetchChef();
    setChef(props.chef);
  }, [props.chef]);

  return (
    <div className="nav">
      {localStorage.getItem('token') ? 
        <Link to={`/dashboard/${chef.id}`} className="link">
          Chef Dashboard
        </Link>
        :
        <Link to="/" className="link">Home</Link>
      }

      <Link to="/register" className="link">Register</Link>

      {localStorage.getItem('token') ? 
        <Link to="/" onClick={() => localStorage.clear()} className="link">
          Logout
        </Link>
        :
        <Link to="/login" className="link">Login</Link>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    chef: state.chef,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchChef })(Nav);