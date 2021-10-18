import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../Images/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import './Register.css'
const Register = () => {
    const {handleRegistration,handleNameChange,handleEmailChange,handlePasswordChange,error,handleResetPassword,user,alert}=useAuth();

	
  
    return (

<div className="register-container">
<div class="signup-form">	
    <form  onSubmit={handleRegistration} >
	<h1 class="card-title text-center mb-5 fw-light fs-5 "> <img src={Logo} width="100" height="100"/> <br/> <b class="h3 text-danger"> Sign Up Healthy Teeth </b></h1>
		<p class="lead">It's free and hardly takes more than 30 seconds.</p>
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"></span>
				<input  onChange={handleNameChange}  type="text" class="form-control" name="username" placeholder="Username" required="required"id="name"/>
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"></span>
				<input  onChange={handleEmailChange}  type="email" class="form-control" name="email" placeholder="Email Address" required="required"id="email"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-lock"></i></span>
				<input onChange={handlePasswordChange} type="password" class="form-control" name="password" placeholder="Password" required="required" id="password"/>
			</div>
        </div>
		<div class="form-group">
		
        </div>        
		<div class="form-group">
		<h5 className="text-center text-danger">{error.message}</h5>
            <button   type="submit" class="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
		<p class="small text-center">By clicking the Sign Up button, you agree to our <br/>Terms and Conditions, and Privacy Policy</p>
        <div class="text-center text-danger">Already have an account?  <Link to="/Login" class="text-center text-danger">Sign in </Link></div>
    </form>

</div>

</div>
    );
};

export default Register;






