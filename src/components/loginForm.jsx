// LoginForm.js
import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ closeLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", { username, password });
      alert("Login successful");
      closeLogin();
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="loginForm">
      <span> Please enter your Email ID or Phone number</span>
      <br />
      <input
        type="text"
        placeholder="Enter your Email or Phone number"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div>
        <input type="checkbox" /> Keep me signed in <br />
      </div>
      <span>
        By continuing you agree to our{" "}
        <span style={{ color: "rgb(18,218,169)" }}>Terms of Use</span> &{" "}
        <span style={{ color: "rgb(18,218,169)" }}>Privacy Policy</span>
      </span>{" "}
      <br />
      <button type="submit">Continue</button>
    </form>
  );
};

export default LoginForm;
