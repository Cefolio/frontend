import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/actions";
import "../css/index.scss";

const UserForm = props => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    location: "",
    bio: ""
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.registerUser(user, props);
  };

  return (
    <div>
      <h1>Register</h1>
      <form on onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={user.location}
          onChange={handleChange}
        />
        <label>Bio</label>
        <input
          type="text"
          placeholder="Bio"
          name="bio"
          value={user.bio}
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    loggedIn: state.isLoggedIn
  };
};

export default connect(mapStatetoProps, { registerUser })(UserForm);
