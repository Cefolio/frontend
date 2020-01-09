import React, { useEffect, useRef} from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import "../css/LoginForm.scss";
import {TweenMax, Power3} from 'gsap';

function LoginForm({ errors, touched }) {
  let logoItem = useRef(null);

  console.log(logoItem);
  useEffect(() => {
    console.log(logoItem);
    TweenMax.to(
        logoItem,
        .8,
        {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut
        }
    )
    
}, [])
  return (
    <div classname= "form-2">
      <Form className="float">
        <h1 ref={el => {logoItem = el}} className="login-in">Sign In</h1>
        <div className="float">
        <Field  className= "log-in" type="text" name="username" placeholder="Username" />
        </div>
        <div className="float"> 
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <button className="clearfix">Login</button>
      </Form>
    </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    //====VALIDATION=====
    const validationSchema = yup.object().shape({
      username: yup
        .string()
        // .username()
        .required("You must create a username!"),
      password: yup
        .string()
        .min(3, "Password must be 3 characters or longer")
        .required("Password is required")
    });
    validationSchema
      .validate(
        {
          username: `${username}`,
          password: `${password}`
        },
        { abortEarly: false }
      )
      .then(valid => {
        console.log("valid", valid);
      })
      .catch(err => {
        console.log("err", err.errors);
      });
    return {
      username: username || "",
      password: password || ""
    };
  },

  //====================
  handleSubmit(values) {
    //HTTP request will be here once backend is done
  }
})(LoginForm);
export default FormikLoginForm;
