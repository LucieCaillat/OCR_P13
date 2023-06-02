import argentBankLogo from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>&nbsp;Sign In
        </Link>
      </div>
    </nav>
  );
}
