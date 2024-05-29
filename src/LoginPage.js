import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import 'animate.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const Navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    Navigate('/home');
  }

  return (
    <main className="login-page">
      <div className="container">
        <div className="login-form-container">
          <h2>Sign in </h2>
          <p>
            New User? <Link 
            to="./SignUp" 
            style={{
              color:"green",
              fontWeight:"600",
            }}
            >Create an account</Link>
          </p>
          <form onSubmit={HandleSubmit}>
            <input 
            type="email" 
            name="email" 
            placeholder="Email address" 
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <div className={`password-input-container ${isFocused ? 'focused' : ''}`}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setPassword(e.target.value)}
                required
                // className="password-input"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={toggleShowPassword}
                style={{
                  paddingRight: '20px',
                  cursor: "pointer",
                  color: "#007bff",
                }}
              />
            </div>
            <p className="forgot-password">
              <Link 
              to="./ForgotPassword"
              style={{
                color: "#4e4e4e",
                fontWeight:"600",
              }}
              
              >Forgot password?</Link></p>
            <button type="submit" className="submit-btn btn">Login</button>
          </form>
        </div>
        <div className="image-container">
        <h2 className='greetings'>Hello,<br/>Welcome Back!</h2>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
