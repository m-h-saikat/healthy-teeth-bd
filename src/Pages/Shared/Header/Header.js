import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NoImageinUSer from "../../Images/NoImageinUser.png";
import "./Header.css";
import useAuth from "../../../Hooks/useAuth";
import Logo from "../../Images/Logo.png";

const Header = () => {
  const { user, LogOut } = useAuth();

  return (
    <div className="header">
      <Navbar expand="lg" sticky="top">
        <Container>
          <img src={Logo} alt="" width="50" height="50" /> 
          <h3 className="ms-2">
             
            <b>HEALTHY TEETH</b>
          </h3>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink to="/Home" className="NavLink">
              <h5>Home</h5>
            </NavLink>
            <Nav.Link as={HashLink} to="/home#About">
              <h5>About</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#Team">
              <h5>Team</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#Service">
              <h5>Service</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/Appoinment">
              <h5>Appoinment</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/Contact">
              <h5>Contact</h5>
            </Nav.Link>

            {user.email ? (
              <button onClick={LogOut} className="btn btn-danger">
                SignOut
              </button>
            ) : (
              <NavLink to="/Login" className="NavLink">
                <button className="btn btn-primary">Sign In</button>
              </NavLink>
            )}
            {user.email ? (
              <div className="d-flex">
                {user.photoURL ? (
                  <img
                    className="user-profile-photo"
                    src={user.photoURL}
                    width="50"
                    height="50"
                    alt=""
                  />
                ) : (
                  <img
                    className="user-profile-photo"
                    src={NoImageinUSer}
                    width="50"
                    height="50"
                    alt=""
                  />
                )} 
                {user.displayName?(<p className="my-auto ms-2 h6">{user.displayName}</p> ):(<p className="my-auto ms-2 h6">{user.email.slice(0, -10)}</p> )}
              </div>
            ) : (
              <NavLink to="/Register" className="NavLink">
                <button className="btn btn-danger">Sign Up</button>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
