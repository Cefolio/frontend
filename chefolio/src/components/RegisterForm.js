import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

const RegristrationApi = 'api/auth/register';
const initialUserForm = {
    email: '',
    username: '',
    password: ''
};

export default function Container(){
    const [serverError, setServerError] = useState('');
    const addChef = (formValues, actions) => {
        const chefToPost = {
            username: formValues.username,
            password: formValues.password
        };
        axios
            .post(RegristrationApi, chefToPost)
            .then(res => {
                actions.resetForm();
            })
            .catch(err => {
                debugger;
            });
    };
    return (
        <div>
            {serverError}
            <UserForm onSubmit={addUser}/>
        </div>
    );
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('No password provided.').min(4, 'Password is too short -- should be at least 4 characters.').matches(/(?=.*[0-9])/, "Password must contain a number and a special character.")
});
const UserForm = ({ onSubmit }) => {
    return (
        <Formik
            validate={validate}
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={props => {
                return(
                    <div>
                        <Form>
                            <h1>Sign Up</h1>
                            <Field
                                className='input-field'
                                name='username'
                                type='text'
                                placeholder='Username'
                                />
                            <ErrorMessage
                                className="error-field"
                                name="username"
                                component="div"
                                />
                        </Form>
                    </div>
                )
            }}
    )
}

//===https://github.com/bw-dev-libs/Front-End/blob/master/dev-libs/src/components/Signup.js