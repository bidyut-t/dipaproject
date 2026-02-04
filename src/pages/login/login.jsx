import { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Add your login logic here
    console.log({ email, password });
  }

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h1 className="loginTitle">Welcome back</h1>
        <p className="loginSubtitle">Sign in to your account to continue</p>

        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="fieldGroup">
            <label htmlFor="email">Email or username</label>
            <input
              id="email"
              type="text"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="fieldGroup">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="submitBtn">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
