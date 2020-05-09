import React from 'react';

import SkillsList from '../components/SkillsList';
import ProjectsList from '../components/ProjectsList';
import About from '../components/About';
import Contact from '../components/Contact';

import portfolioService from '../services/portfolioService';

const HomePage = () => {

    const { skills, projects, about } = portfolioService.query()

    return (
        <section className = 'home-page'>
            <SkillsList skills = { skills }/>
            <ProjectsList projects = { projects } />
            <About about = { about } />
            <Contact />
        </section>
    )
}

export default HomePage;