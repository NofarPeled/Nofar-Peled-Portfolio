import React from 'react';

import SkillsList from '../components/SkillsList';
import TechList from '../components/TechList';
import ProjectsList from '../components/ProjectsList';
import About from '../components/About';
import Contact from '../components/Contact';

import portfolioService from '../services/portfolioService';

const HomePage = () => {

    const { skills, technologies, projects, about } = portfolioService.query()

    return (
        <section className = 'home-page'>
            <SkillsList skills = { skills }/>
            <TechList technologies = { technologies } />
            <ProjectsList projects = { projects } />
            <About about = { about } />
            <Contact />
        </section>
    )
}

export default HomePage;