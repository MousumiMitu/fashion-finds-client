import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light nav-container ">
        <div class="container-fluid nav-width">
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "#800060",
              textShadow: "2px 2px 5px white",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Fashion Finds
          </Link>
          <button
            class="navbar-toggler"
            style={{ background: "white" }}
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
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "#800060",
                    textShadow: "2px 2px 5px white",
                  }}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/orders"
                  style={{
                    textDecoration: "none",
                    color: "#800060",
                    textShadow: "2px 2px 5px white",
                  }}
                >
                  Orders
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/admin"
                  style={{
                    textDecoration: "none",
                    color: "#800060",
                    textShadow: "2px 2px 5px white",
                  }}
                >
                  Admin
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "#800060",
                    textShadow: "2px 2px 5px white",
                  }}
                >
                  Deals
                </Link>
              </li>
              <div>
                <button className="user-btn">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
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
