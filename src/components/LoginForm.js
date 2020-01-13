import React, { useState } from "react";
import "../css/index.scss";

import { connect } from "react-redux";
import { login } from "../actions/actions";

const LoginForm = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = e => {
    e.preventDefault();
    props.login(user, props);
  }

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

<<<<<<< HEAD
  
  return (
    <div>
      <h1>Login</h1>
      
=======
    return (
>>>>>>> 43718fa08d5bbc12f4a49e5b771e1344003b107b
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChanges}
          />
          <label>Password</label>
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChanges}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  
}

// const LoginForm = () => {

//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   })
  // const { register, handleSubmit, errors, formState} = useForm({
  //   mode: "onChange"
  // });
  // const onSubmit = async data => {
  //   const res = await login(data);
  //   if (res) {
  //     rest.history.push("/dashboard")
  //   } else {

  //   }
  // };

  

  
  // return (
  //   <div>
  //     <h1>Login</h1>
  //     <div>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         {errors.text && "Username is needed"}
  //         <input
  //           type="text"
  //           placeholder="Username"
  //           name="username"
  //           ref={register({ required: true})}/>
  //           {errors.password && "Your password is needed"}
  //           <input
  //             type="password"
  //             placeholder="Password"
  //             name="password"
  //             ref={register({required: true})}/>
  //             <div>
  //               <button type="submit" disabled={!formState.isValid}>Login</button>
  //             </div>
  //       </form>
  //     </div>
  //   </div>
  // )
// }



export default connect(null, { login })(LoginForm);
