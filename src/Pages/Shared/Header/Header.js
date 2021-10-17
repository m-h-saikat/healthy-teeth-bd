import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../Images/Logo.png'

const Header = () => {
    const {user,LogOut}=useAuth();
    return (
        <div className="header"  >
          <Navbar >
  <Container>
  <img src={Logo} alt="" width="50" height="50" />
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <NavLink to="/Home" className="NavLink"><h4>Home</h4></NavLink>
    <Nav.Link as={HashLink} to="/home#About"><h4>About</h4></Nav.Link>
    <Nav.Link as={HashLink} to="/home#Service"><h4>Service</h4></Nav.Link>



    {user.email?(<button onClick={LogOut}  className="btn btn-danger">SignOut</button> ):(<NavLink to="/Login"className="NavLink"><button className="btn btn-primary">Sign In</button></NavLink>)
    }
   { user.email?(<img className="user-profile-photo" src={user.photo} width="50" height="50"/>) :(<NavLink to="/Register"className="NavLink"><button className="btn btn-danger">Sign Up</button></NavLink>)}
    </Navbar.Collapse>
  </Container>
</Navbar>
          

        </div>
    );
};

export default Header;







