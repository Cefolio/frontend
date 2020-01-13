import React, { useEffect, useRef } from "react";
import {useForm} from 'react-hook-form'

import "../css/LoginForm.scss";

import { connect } from "react-redux";
import { login } from "../actions/actions";



function LoginForm({ login , ... rest }) {
  const { register, handleSubmit, errors, formState} = useForm({
    mode: "onChange"
  });
  const onSubmit = async data => {
    const res = await login(data);
    if (res) {
      rest.history.push("/dashboard")
    } else {

    }
  };

  

  
  return (
    <div>
      <h1>Login</h1>
      
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.text && "Username is needed"}
          <input
            type="text"
            placeholder="Username"
            name="username"
            ref={register({ required: true})}/>
            {errors.password && "Your password is needed"}
            <input
              type="password"
              placeholder="Password"
              name="password"
              ref={register({required: true})}/>
              <div>
                <button type="submit" disabled={!formState.isValid}>Login</button>
              </div>
        </form>
      </div>
    </div>
  )
}



export default connect(null, { login })(LoginForm);
