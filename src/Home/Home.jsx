import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import AboutPage from '../Component/About';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutPage></AboutPage>
        </div>
    );
};

export default Home;