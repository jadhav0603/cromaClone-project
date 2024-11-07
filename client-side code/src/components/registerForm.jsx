// RegisterForm.js
import React, { useState } from "react";
import axios from "axios";


const RegisterForm = ({ closeLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/register", { name, email, mobile, password: regPassword });
      alert("Registration successful");
      closeLogin();
      
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="registerForm" >
      <h3>Create Account</h3>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter Your Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Create Password"
        value={regPassword}
        onChange={(e) => setRegPassword(e.target.value)}
        required
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default RegisterForm;
