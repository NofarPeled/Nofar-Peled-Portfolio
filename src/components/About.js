import React from 'react';

import SectionHeader from './SectionHeader';

const About = props => {
    const { about } = props;
    
    return (
        <section id = 'about'>
            <SectionHeader 
                payload = {{ 
                    className: 'about', 
                    title: 'About' 
                }} 
            />
            <div className = 'about-details'>
                <h2 className = 'about-title section-title'>
                    { about.title }
                </h2>

                <p className = 'about-description'>
                    { about.description }
                </p>
            </div>

        </section>
    )
}

export default About;