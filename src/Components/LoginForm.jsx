import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { LOCAL_STORAGE_LOGGED_USRS_KEY } from "./UsersList";
import { LOCAL_STORAGE_USRS_KEY } from "./UsersList";
import { passwordValidation } from "../Utility/passwordValidation";
import { inputValueUpdate } from "../Utility/general";

export default function Loginform(props) {
  const { setUser } = props;
  const [userName, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const [validationError, SetValidationError] = useState(null);
  const navigation = useNavigate();

  function loginbutton() {
    const validationResult = passwordValidation(password);
    if (validationResult.result === false) {
      SetValidationError(validationResult.massage);
      return;
    }
    const usersList =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_USRS_KEY)) || [];
    const result = usersList.find(
      (user) => user.userName === userName && user.password === password
    );
    //  console.log (result);

    if (result) {
      setUser(result);
      localStorage.setItem(
        LOCAL_STORAGE_LOGGED_USRS_KEY,
        JSON.stringify(result)
      );
      navigation("/");
    } else {
      SetValidationError("user not found");
    }
  }

  return (
    <div className="cardHeader">
      <div className="cd">
        <h4 className="title">Log In!</h4>
        <form>
          <p>{validationError}</p>
          <div className="form__group field">
            <input
              onChange={(event) => {
                inputValueUpdate(event, updateUserName);
              }}
              placeholder="User Name"
              className="form__field"
              value={userName}
              type="text"
            />
            <label className="form__label" htmlFor="userName">
              User Name
            </label>
          </div>
          <div className="form__group field">
            <input
              onChange={(event) => {
                inputValueUpdate(event, updatePassword, passwordValidation);
              }}
              placeholder="Password"
              className="form__field"
              value={password}
              type="password"
            />
            <label className="form__label" htmlFor="password">
              Password
            </label>
          </div>
          <button className="logSignBtn" type="submit" onClick={loginbutton}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
