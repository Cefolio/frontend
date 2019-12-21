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
    const addChef = (form)
}

//===https://github.com/bw-dev-libs/Front-End/blob/master/dev-libs/src/components/Signup.js