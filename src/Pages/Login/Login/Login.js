import React from "react";
import "./Login.css";
import useAuth from "../../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import GoogleImage from "../../Images/Google.png";
import GithubImage from "../../Images/GitHub.png";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    SignInUsingGoogle,
    error,
    SignInUsingGithub,
    handleEmailChange,
    handlePasswordChange,
    handlesignInWithEmailAndPassword
  } = useAuth();
  const resetInfo = () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  };

  return (
    <div className="Login-container ">
      <div className="row w-75 mx-auto">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5 mx-auto">
            <div className="card-body p-4 p-sm-5">
              <h1 className="card-title text-center mb-5 fw-light fs-5 ">
              
                <img src={Logo} width="100" height="100" alt=""/> <br />
                <b className="h3 text-danger"> Sign In Healthy Teeth </b>
              </h1>
              <form onSubmit={handlesignInWithEmailAndPassword}>
                <div className="form-floating mb-3">
                  <input
                    onBlur={handleEmailChange}
                    type="email"
                    className="form-control "
                    placeholder="name@example.com"
                    id="email"
                  />
                  <label for="floatingInput">
                
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email
                    address
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onBlur={handlePasswordChange}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                  <label for="floatingPassword">
                  
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> Password
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label className="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <p>{error.message}</p>
                  <button
                    className="btn btn-primary"
                    type="submit" onClick={resetInfo}
                  >
                    Sign in
                  </button>
                </div>
                <div className="text-center text-danger">
                  New User?  
                    <Link to="/Register" className="text-center text-danger Login-Logout-Button ">
                  
                      Sign Up
                  </Link>
                </div>
                <p>
               
                  or <br /> Login with
                </p>
                <div className=" mb-2">
                  <button
                    className="Google-Login-Button me-4"
                    onClick={SignInUsingGoogle}
                  >
                    <img src={GoogleImage} alt="" width="50" height="50" />
                  </button>
                  <button
                    className="GitHub-Login-Button"
                    onClick={SignInUsingGithub}
                  >
                    <img src={GithubImage} alt="" width="50" height="50" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;