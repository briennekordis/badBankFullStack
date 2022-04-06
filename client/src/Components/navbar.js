import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedIn = localStorage.getItem('email') != null;
    const userName = localStorage.getItem('userName');

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">badBank</Link>
        <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse" id="navbarNav">
          {loggedIn ? (
            <>
              <ul className="navbar-nav" id="nav-section1">
                <li id="nav1" className="nav-item"><span className="nav-link">Welcome, {userName}!</span></li>
                <li id="nav2" className="nav-item"><Link className="nav-link" title="Logout" to="/logout">Logout</Link></li>
              </ul>
              <ul className="navbar-nav flex-grow-1" id="nav-section2">
                <li id="nav3" className="nav-item"><Link className="nav-link" title="Make a deposit into your account." to="/deposit">Deposit</Link></li>
                <li id="nav4" className="nav-item"><Link className="nav-link" title="Make a withdrawl from your account." to="/withdraw">Withdraw</Link></li>
              </ul>
            </>
          ) : (
            <ul className="navbar-nav" id="nav-section3">
              <li id="nav5" className="nav-item"><Link className="nav-link" title="Create an account to use badBank." to="/createAccount">Create Account</Link></li>
              <li id="nav6" className="nav-item"><Link className="nav-link" title="Login to an account to use badBank." to="/login">Login</Link></li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;