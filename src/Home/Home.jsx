import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import AboutPage from '../Component/About';
import Footer from '../Component/Footer';
import HomePageHero from '../Component/HomePageHero';
import FeaturesSection from '../Component/FeaturesSection';
import ConnectivitySection from '../Component/ConnectivitySection';
import QuestionSolver from '../Component/QuestionSolver';
import StepByStepSolution from '../Component/SolutionStep';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <HomePageHero></HomePageHero>
            <FeaturesSection></FeaturesSection>
            <ConnectivitySection></ConnectivitySection>
            <QuestionSolver></QuestionSolver>
            <StepByStepSolution></StepByStepSolution>
            <AboutPage></AboutPage>
            <Footer></Footer>
        </div>
    );
};

export default Home;