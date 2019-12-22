// create a fetchChef action in actions
// create a chef and isFetching state for initialState in reducers

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChef } from '../actions/actions';

const Nav = props => {

  const [chef, setChef] = useState(props.chef)

  useEffect(() => {
    props.fetchChef();
    setChef(props.chef);
  }, [props.chef]);

  return (
    <div>
      {localStorage.getItem('token') ? 
        <Link to={`/dashboard/${chef.id}`}>Chef Dashboard</Link>
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

const mapStateToProps = state => {
  return {
    chef: state.chef,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchChef })(Nav);