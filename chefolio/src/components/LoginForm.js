import React, {useState} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

function LoginForm({ errors, touched }) {
   
    return(
        <div>
            <Form>
                
               
                <Field 
                type="text"
                name="username"
                placeholder="Username"
                />
                 
                 <div>
                     {touched.password && errors.password && <p>{errors.password}</p>}
                     <Field
                     type="text"
                     name="password"
                     placeholder="Password"
                     />
               </div>
                 <button>Login</button>
            </Form>
        </div>
    )
}
const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password}){
        return {
            username: username || "",
            password: password || ""
        };
    },
    //====VALIDATION=====
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .username()
            .required('You must create a username!'),
        password: Yup.string()
            .min(3, "Password must be 3 characters or longer")
            .required('Password is required')
    }),
    //====================
    handleSubmit(values){
        //HTTP request will be here once backend is done
    }
})(LoginForm);
export default FormikLoginForm;