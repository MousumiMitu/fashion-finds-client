import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light nav-container ">
        <div class="container-fluid">
          <Link to="/home" style={{ textDecoration: "none" }}>
            website
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav nav-lists">
              <li class="nav-item">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  Orders
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admin" style={{ textDecoration: "none" }}>
                  Admin
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  Deals
                </Link>
              </li>
              <div>
                <button>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    {loggedInUser.name ? loggedInUser.name : "Login"}
                  </Link>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
<h2>this is header</h2>;
