import React from 'react';
import Hero from '../../Component/Hero';
import Footer from '../../Component/Footer';
import HomePageHero from '../../Component/HomePageHero';
import FeaturesSection from '../../Component/FeaturesSection';
import ConnectivitySection from '../../Component/ConnectivitySection';
import QuestionSolver from '../../Component/QuestionSolver';
import StepByStepSolution from '../../Component/SolutionStep';
import MasteryDashboard from '../../Component/MasteryDashboard';
import RevisionSession from '../../Component/RevisionSession';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomePageHero></HomePageHero>
            <FeaturesSection></FeaturesSection>
            <ConnectivitySection></ConnectivitySection>
            <QuestionSolver></QuestionSolver>
            <StepByStepSolution></StepByStepSolution>
            <MasteryDashboard></MasteryDashboard>
            <RevisionSession></RevisionSession>
            <Footer></Footer>
        </div>
    );
};

export default Home;