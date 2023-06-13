import argentBankLogo from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as loginAction from "../features/login/loginSlice";

export default function Header() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.status) === "connected";
  const userData = useSelector((state) => state.user.data)

  const Connected = (
    <div>
      <Link className="main-nav-item" to="/user">
        <i className="fa fa-user-circle"></i>
        {userData === null? "": userData.firstName}
      </Link>
      <Link
        className="main-nav-item"
        to="./"
        onClick={(e) => {
          dispatch(loginAction.disconnect());
        }}
      >
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );

  const NotConnected = (
    <div>
      <Link className="main-nav-item" to="./sign-in">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  );

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isLogin ? Connected : NotConnected}
    </nav>
  );
}
