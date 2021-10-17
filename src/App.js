import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";

import Home from "./Pages/Home/Home";
import Service from "./Pages/Home/Services/Service";
import ServiceDetails from "./Pages/Home/Services/ServiceDetails";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/Not Found/NotFound";

import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
    <AuthProvider> 
    <Router>
       <Header> </Header>
       <Switch> 
       <Route exact path ="/"> 
         <Home></Home>
         </Route>
         <Route path ="/Home"> 
         <Home></Home>
         </Route>
         <Route path ="/Service"> 
         <Service></Service>
         </Route>
         <Route path ="/Login"> 
         <Login></Login>
         </Route>
         <Route path ="/ServiceDetails"> 
         <ServiceDetails></ServiceDetails>
         </Route>
         <Route path ="/Register"> 
         <Register></Register>
         </Route>
         <Route path ="*"> 
       <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
