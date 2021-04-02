import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import icon from "../../images/logo.png";
import "./Login.css";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div className="login-section text-center">
      <h4 className="text-center mb-3" style={{ color: "purple" }}>
        Login form
      </h4>
      <div className="form-section">
        <form action="">
          <FontAwesomeIcon className="icon-style" icon={faEnvelope} />
          <input className="login-input" type="text" placeholder="email" />
          <br />
          <FontAwesomeIcon className="icon-style" icon={faPen} />
          <input
            className="login-input"
            type="password"
            placeholder="password"
          />
          <br />
          <button className="login-btn">Login</button>
        </form>
      </div>
      <p className="text-center fst-italic fs-5">or</p>
      <button className="google-sign-btn " onClick={handleGoogleSignIn}>
        <img src={icon} alt="" />
        continue with google
      </button>
    </div>
  );
};

export default Login;
