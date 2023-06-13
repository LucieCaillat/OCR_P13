import { useDispatch } from "react-redux";
import { useState } from "react";
import * as loginAction from "./loginSlice";
import * as userAction from "../user/userSlice";

export default function SignIn() {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [rememberMeValue, setRememberMeValue] = useState(false);
  const dispatch = useDispatch();

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userNameValue}
              onChange={(e) => setUserNameValue(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setRememberMeValue(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            className="sign-in-button"
            onClick={(e) => {
              e.preventDefault();
              console.log(rememberMeValue);
              dispatch(
                loginAction.login(userNameValue, passwordValue, userAction.fetchUser)
              );
            }}
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
