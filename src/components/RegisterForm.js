import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import Nav from "./Nav";
import { connect } from "react-redux";
import { registerUser } from "../actions/actions";
import { useForm } from "react-hook-form";



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

//  }
};
 
  return (
    <div>
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
    </div>
  );
};


export default connect(null, { registerUser })(UserForm);

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
