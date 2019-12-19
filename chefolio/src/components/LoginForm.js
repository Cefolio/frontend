import React, {useState} from 'react';
import {withFormik, Form, Field} from 'formik';

function LoginForm() {
   
    return(
        <div>
            <Form>
                
               
                <Field 
                type="text"
                name="username"
                placeholder="Username"
                />
                 
                 <label>
                     Password:
                     <Field
                     type="text"
                     name="password"
                     placeholder="Password"
                     />
                 </label>
                 <button>Login</button>
            </Form>
        </div>
    )
}

export default LoginForm;