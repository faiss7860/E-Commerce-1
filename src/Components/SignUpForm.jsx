import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { inputValueUpdate } from "../Utility/general";
import { LOCAL_STORAGE_USRS_KEY } from "./UsersList";

const SignUpForm = (props) => {
  const [fullName , setFullName] = useState('')
  const [userName , setUserName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigation = useNavigate();

  return (
    <div className="cardHeader">
    <div className="cd">
  <h4 className="title">Sign Up!</h4>
  <form>
    <div className="form__group field">
      <input placeholder="Full Name" className="form__field"  type="fullName" value={fullName} 
            onChange={(event) => {
              inputValueUpdate(event, setFullName);
            }}/>
            <label className="form__label" >Full Name</label>
    </div>
    <div className="form__group field">
      <input placeholder="User Name" className="form__field"  type="UserName" value={userName} 
            onChange={(event) => {
              inputValueUpdate(event, setUserName);
            }}/>
            <label className="form__label" >User Name</label>
    </div>
    <div className="form__group field">
      <input placeholder="Email" className="form__field"  type="email" value={email}
            onChange={(event) => {
              inputValueUpdate(event, setEmail);
            }}/>
            <label className="form__label" >Email</label>
    </div>
    <div className="form__group field">
      <input placeholder="Password" className="form__field" type="password" value={password}
            onChange={(event) => {
              inputValueUpdate(event, setPassword);
            }}/>
            <label className="form__label" >Password</label>
    </div>
    <button className="logSignBtn" type="submit" onClick={() => {

      let usersList = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_USRS_KEY)
        );
        usersList = usersList === null ? [] : usersList;
        localStorage.setItem(
          LOCAL_STORAGE_USRS_KEY,
          JSON.stringify([
            ...usersList, {
              fullName , userName, email, password
            },
          ])
          );
          navigation("/login");}}>Sign Up</button>
  </form>
          </div>
</div>
  );
};
export default SignUpForm;