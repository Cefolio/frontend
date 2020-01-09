import React, { useRef, useEffect } from "react";
import { withFormik, Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import Nav from "./Nav";
import { connect } from "react-redux";
import { registerUser } from "../actions/actions";

import { TweenMax, Power3 } from "gsap";

const UserForm = ({ onSubmit }) => {
  let logoItem = useRef(null);
  let textItem = useRef(null);
  console.log(logoItem);

  useEffect(() => {
    console.log(logoItem);
    TweenMax.to(logoItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut
    });
    TweenMax.to(textItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2
    });
  }, []);
  return (
    <div>
      <Form>
        <Nav />
        <h1
          ref={el => {
            logoItem = el;
          }}
        >
          Sign Up
        </h1>
        <Field
          className="input-field"
          name="name"
          type="text"
          placeholder="Your First Name"
        />
        <ErrorMessage className="error-field" name="name" component="div" />
        <Field
          className="input-field"
          name="email"
          type="email"
          placeholder="email"
        />
        <ErrorMessage className="error-field" name="email" component="div" />
        <Field
          className="input-field"
          name="phone number"
          type="text"
          placeholder="Phone Number"
        />
        <ErrorMessage className="error-field" name="phone number" component="div" />
        <Field
          className="input-field"
          name="location"
          type="text"
          placeholder="Location"
        />
        <ErrorMessage className="error-field" name="location" component="div" />
        <Field
          className="input-field"
          name="bio"
          type="text"
          placeholder="Short bio"
        />
        <ErrorMessage className="error-field" name="bio" component="div" />
        <Field
          className="input-field"
          name="username"
          type="text"
          placeholder="Username"
        />
        <ErrorMessage className="error-field" name="username" component="div" />
        <Field
          className="input-field"
          name="password"
          type="password"
          placeholder="Password"
        />
        <ErrorMessage className="error-field" name="password" component="div" />

        <button type="submit">Create Account</button>

        <p
          ref={el => {
            textItem = el;
          }}
        >
          Already have an account?&nbsp;&nbsp;&nbsp;
          <span>
            <Link className="login-span" to="/login">
              Log in
            </Link>
          </span>
        </p>
      </Form>
    </div>
  );
};
const FormikRegisterForm = withFormik({
  mapsPropsToValues({ username, password }) {
    const validationSchema = yup.object().shape({
      username: yup.string().required("Please enter your username"),
      password: yup
        .string()
        .required("No password provided.")
        .min(4, "Password is too short -- should be at least 4 characters.")
        .matches(
          /(?=.*[0-9])/,
          "Password must contain a number and a special character."
        )
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
      username: username,
      password: password
    };
  },
  handleSubmit(values, props) {
    registerUser(values, props);
  }
})(UserForm);

export default connect(null, { registerUser })(FormikRegisterForm);

// const RegristrationApi = 'api/auth/register';
// const initialUserForm = {
//     email: '',
//     username: '',
//     password: ''
// };

// const validate = formValues => {
//     const errors = {};
// }

// export default function Container(){
//     const [serverError, setServerError] = useState('');
//     const addChef = (formValues, actions) => {
//         const chefToPost = {
//             username: formValues.username,
//             password: formValues.password
//         };
//         axios
//             .post(RegristrationApi, chefToPost)
//             .then(res => {
//                 actions.resetForm();
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     };
//     return (
//         <div>
//             {serverError}
//             <UserForm onSubmit={addChef}/>
//         </div>
//     );
// }
