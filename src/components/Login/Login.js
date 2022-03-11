import { useState } from "react";
import classes from "./Login.module.css";

import { Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import * as userActions from "../../redux/user/userActions";

const Login = (props) => {
  const [name, setName] = useState(null);
  const user = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  const login = () => {
    if (!name) {
      alert("please enter your name");
      return;
    }
    dispatch(userActions.userLoginRequest());
    dispatch(userActions.userLoginSucces(name));
  };
  return (
    <>
      {user ? (
        <Redirect to="/todo" />
      ) : (
        <div className={classes.LoginContainer}>
          <div className={classes.LoginPage}>
            <div className={classes.InputContainer}>
              <input
                type="text"
                placeholder="Enter Name"
                className={classes.Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <button onClick={login} className={classes.LoginButton}>
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
