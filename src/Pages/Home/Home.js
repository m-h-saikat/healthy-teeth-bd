import React from 'react';
import Login from '../Login/Login/Login';
import About from './About/About';
import Banner from './Banner/Banner';
import Service from './Services/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Login></Login>
        </div>
    );
};

export default Home;