import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

function LoginForm({ errors, touched }) {
  return (
    <div>
      <Form>
        <Field type="text" name="username" placeholder="Username" />

        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <button>Login</button>
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
