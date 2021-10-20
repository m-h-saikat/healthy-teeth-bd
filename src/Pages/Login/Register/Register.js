import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../Images/Logo.png'


import './Register.css'
const Register = () => {
    const {handleRegistration,handleNameChange,handleEmailChange,handlePasswordChange,error}=useAuth();

	
    return (

<div className="register-container">
<div className="signup-form">	
    <form  onSubmit={handleRegistration} >
	<h1 className="card-title text-center mb-5 fw-light fs-5 "> <img src={Logo} width="100" height="100" alt=""/> <br/> <b className="h3 text-danger"> Sign Up Healthy Teeth </b></h1>
		<p className="lead">It's free and hardly takes more than 30 seconds.</p>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"></span>
				<input   onChange={handleNameChange}  type="text" className="form-control" name="username" placeholder="Username" required="required"id="name"/>
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"></span>
				<input  onChange={handleEmailChange}  type="email" className="form-control" name="email" placeholder="Email Address" required="required"id="email"/>
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock"></i></span>
				<input onChange={handlePasswordChange} type="password" className="form-control" name="password" placeholder="Password" required="required" id="password"/>
			</div>
        </div>
		<div className="form-group">
		
        </div>        
		<div className="form-group">
		<h5 className="text-center text-danger">{error.message}</h5>
            <button  type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
		<p className="small text-center">By clicking the Sign Up button, you agree to our <br/>Terms and Conditions, and Privacy Policy</p>
        <div className="text-center text-primary "><Link to="/Login" className="text-center text-danger Login-Logout-Button">Already have a account ? Please Sign in!</Link></div>
    </form>

</div>

</div>
    );
};

export default Register;






