import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NoImageinUSer from '../../Images/NoImageinUser.png'
import './Header.css'
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../Images/Logo.png'

const Header = () => {
    const {user,LogOut}=useAuth();
    return (
        <div className="header"  >
          <Navbar expand="lg" >
  <Container>
  <img src={Logo} alt="" width="50" height="50" />   <h1 className="ms-2"> <b>HEALTHY TEETH</b></h1>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <NavLink to="/Home" className="NavLink"><h4>Home</h4></NavLink>
    <Nav.Link as={HashLink} to="/home#About"><h4>About</h4></Nav.Link>
    <Nav.Link as={HashLink} to="/home#Team"><h4>Team</h4></Nav.Link>
    <Nav.Link as={HashLink} to="/home#Service"><h4>Service</h4></Nav.Link>
    <Nav.Link as={HashLink} to="/Appoinment"><h4>Appoinment</h4></Nav.Link>
    <Nav.Link as={HashLink} to="/Contact"><h4>Contact</h4></Nav.Link>




    {user.email?(<button onClick={LogOut}  className="btn btn-danger">SignOut</button> ):(<NavLink to="/Login"className="NavLink"><button className="btn btn-primary">Sign In</button></NavLink>)
    }
   { user.email?( <div className="d-flex">{user.photo?(<img className="user-profile-photo" src={user.photo} width="50" height="50"/>):(<img className="user-profile-photo" src={NoImageinUSer} width="50" height="50"/>)} <p className="my-auto ms-2 h6">
{user.name}
   
   </p> </div> ) :(<NavLink to="/Register"className="NavLink"><button className="btn btn-danger">Sign Up</button></NavLink>)}
    </Navbar.Collapse>
  </Container>
</Navbar>

          

        </div>
    );
};

export default Header;








