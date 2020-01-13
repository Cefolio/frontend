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

<<<<<<< HEAD
const UserForm = ({ signup, ...rest }) => {
  console.log("rest",rest)
 const { register, handleSubmit, errors, formState} = useForm({
   mode: "onChange"
 });
 const onSubmit = async data =>{
 const name = data.fname.concat(" ", data.lname);
 data = {
   name: name,
   email: data.email,
   password: data.password,
   location: data.location,
   phone: data.phone,
   bio: data.bio
 };
//  const res = await registerUser(data);
//  if (res) {
//    rest.history.push("/Login");
//  }else{
=======
  const handleSubmit = e => {
    e.preventDefault();
    props.registerUser(user, props);
  };
>>>>>>> 43718fa08d5bbc12f4a49e5b771e1344003b107b

  return (
    <div>
<<<<<<< HEAD
      <h1> Register </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {errors.name && "Your first name is needed"}
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              width="calc(42% - 20px)"
              maxWidth="50%"
              ref={register({ required: true, minLength: 2 })}
              />
              {errors.name && "Your last name is needed"}
              <input 
                type="text"
                placeholder="Last Name"
                name="lname"
                width="calc(42% - 20px)"
                maxwidth="50%"
                ref={register({required: true, minLength: 2})}/>
          </div>
          {errors.email && "Your email is needed"}
          <input
            type="email"
            placeholder="Email"
            name="email"
            />
            {errors.password && (<ul>
              <li>Password is required</li>
            </ul>)}
            <input
              type="password"
              placeholder="Password"
              name="password"
              />
              {errors.location && "Your location is required"}
              <input
                type="text"
                placeholder="Location"
                name="location"
                />
                {errors.phone && "Your phone number is needed"}
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"/>
                  {errors.bio && "Please enter a short bio"}
                  <input
                    type="text"
                    placeholder="Bio"
                    name="bio"/>
                <div>
                  <button type="submit" diabled={!formState.isValid}> Create Account </button>
                </div>
        </form>
      </div>
=======
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
>>>>>>> 43718fa08d5bbc12f4a49e5b771e1344003b107b
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    loggedIn: state.isLoggedIn
  };
};

export default connect(mapStatetoProps, { registerUser })(UserForm);
