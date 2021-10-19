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
    handlesignInWithEmailAndPassword,
    alert,
  } = useAuth();
  const resetInfo = () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  };

  return (
    <div class="Login-container ">
      <div class="row w-75 mx-auto">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5 mx-auto">
            <div class="card-body p-4 p-sm-5">
              <h1 class="card-title text-center mb-5 fw-light fs-5 ">
              
                <img src={Logo} width="100" height="100" /> <br />
                <b class="h3 text-danger"> Sign In Healthy Teeth </b>
              </h1>
              <form onSubmit={handlesignInWithEmailAndPassword}>
                <div class="form-floating mb-3">
                  <input
                    onBlur={handleEmailChange}
                    type="email"
                    class="form-control "
                    placeholder="name@example.com"
                    id="email"
                  />
                  <label for="floatingInput">
                
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email
                    address
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    onBlur={handlePasswordChange}
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    id="password"
                  />
                  <label for="floatingPassword">
                  
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> Password
                  </label>
                </div>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div class="d-grid">
                  <p>{error.message}</p>
                  <button
                    class="btn btn-primary"
                    type="submit" onClick={resetInfo}
                  >
                    Sign in
                  </button>
                </div>
                <div class="text-center text-danger">
                  New User?
                  <Link to="/Register" class="text-center text-danger">
                  
                    Sign Up
                  </Link>
                </div>
                <p>
               
                  or <br /> Login with
                </p>
                <div class=" mb-2">
                  <button
                    className="Google-Login-Button me-4"
                    onClick={SignInUsingGoogle}
                  >
                    <img src={GoogleImage} alt="" width="50" height="50" />
                  </button>
                  <button
                    class="GitHub-Login-Button"
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