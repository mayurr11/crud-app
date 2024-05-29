import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import 'animate.css';

const SignUpPage = () => {
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
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
    <main className="SignUp-page">
      <div className="container">
        <div className="SignUp-form-container">
          <h2>Sign up </h2>
          <p>
          Already have an account? <Link 
            to="/" 
            style={{
              color:"green",
              fontWeight:"600",
            }}
            >
            Sign in</Link>
          </p>
          <form onSubmit={HandleSubmit}>
            <div className="name-container">
            <input 
            type="text" 
            name="First-Name" 
            placeholder="First Name" 
            className="name-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            />
            
            <input 
            type="text" 
            name="Last-Name" 
            placeholder="Last Name" 
            className="name-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            />
            </div>
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
           <button type="submit" className="submit-btn btn">Create Account</button>
          </form>
        </div>
        <div className="image-container">
        <h2 className='greeting'>Get Started!</h2>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
