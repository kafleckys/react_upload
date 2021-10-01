import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import history from "./history";
//React.fragment removes extra div tag
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-background-color">
          <a className="navbar-brand" href="/#">
            Ecommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                    exact={true}
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className="nav-link"
                    activeClassName="active"
                    exact={true}
                  >
                    Register
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/dashboard"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/customers"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Customers
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    className="nav-link"
                    activeClassName="active"
                  >
                    ShoppingCart
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <a
                    href="/#"
                    className="nav-link"
                    onClick={this.onLogoutClick}
                  >
                    Logout
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }

  onLogoutClick = (event) => {
    event.preventDefault(); //to prevent page refresh
    this.props.updateIsLoggedInStatus(false); //to logout so login matra dekhincha
    //history object use garera login ma lagne
    // history.replace("/");
    //NavBar is not component of HashRouter document.location.hash is provided by HTML5
    document.location.hash = "/";
  };
}
export default NavBar;
