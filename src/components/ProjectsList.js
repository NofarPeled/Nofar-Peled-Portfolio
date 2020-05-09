import React from 'react';

import ProjectPreview from '../components/ProjectPreview';
import SectionHeader from './SectionHeader';

const ProjectsList = props => {

    const { projects } = props;

    const projectsList = projects.map( project => {        
        return (
            <ProjectPreview key = { project._id } project = { project }/>
        );
    });

    return (
        <section id = 'projects'>
            <SectionHeader 
                payload = {{ 
                    className: 'projects', 
                    title: 'Projects'
                }} 
            />

            <ul className = 'projects-list clean-list'>
                {
                    projectsList
                }
            </ul>
        </section>
    );
};

export default ProjectsList; 