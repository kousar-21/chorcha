import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import AboutPage from '../Component/About';
import Footer from '../Component/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutPage></AboutPage>
            <Footer></Footer>
        </div>
    );
};

export default Home;