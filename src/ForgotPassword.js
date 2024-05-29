import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate('/');
  }

  return (
    <main className="ForgotPassword-page">
      <div className="form-container">
        <div className="icon-container"></div>
        <h2 className="title">Forgot Password?</h2>
        <p className="desciption">
          No worries! Resetting your password is easy. Please enter the email
          address associated with your account. We'll send you a link to reset
          your password.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn">
            Send Request
          </button>
        </form>
        <Link to={"/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
          <p className="link">
            Return to sign in
          </p>
        </Link>
      </div>
    </main>
  );
};

export default ForgotPassword;
