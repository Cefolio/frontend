// create a fetchChef action in actions
// create a chef and isFetching state for initialState in reducers

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/actions";
import "../css/index.scss";

const Nav = props => {
  return (
    <div className="nav">
      {props.loggedIn ? (
        <Link to={`/dashboard`} className="link">
          Chef Dashboard
        </Link>
      ) : (
        <Link to="/" className="link">
          Home
        </Link>
      )}
      {props.loggedIn ? null : (
        <Link to="/register" className="link">
          Register
        </Link>
      )}

      {props.loggedIn ? (
        <Link to="/" onClick={() => props.logout()} className="link">
          Logout
        </Link>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, { logout })(Nav);
