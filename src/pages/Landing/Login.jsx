import React from "react";
import { Link } from "react-router-dom";
import AppHero from "../../components/AppHero";
import "../../css/login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <AppHero />
        <div className="login-inputs">
          <Link to="login">
          <button className="auth-btn login-btn" type="button">
            Login
          </button>
          </Link>
          <Link to="signup">
          <button className="auth-btn reg-btn" type="button">
            Register
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
