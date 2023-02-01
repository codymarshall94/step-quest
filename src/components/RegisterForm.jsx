import React, { useState } from "react";
import "../css/auth.css";
import AppHero from "./AppHero";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <AppHero />
      <h1 className="auth-form-title">Register</h1>
      <form>
        <input
          className="auth-form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth-form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-form-btn reg-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
