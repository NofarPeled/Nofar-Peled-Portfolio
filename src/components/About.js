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
            <div className = 'about-container-div'>
                <div className = 'about-details'>
                    <h2 className = 'about-title section-title'>
                        { about.title }
                    </h2>

                    <p className = 'about-description'>
                        { about.description }
                    </p>
                    <a 
                        href = {require('../assets/files/Nofar Peled - Developer.docx')} 
                        className = 'download-link'
                    > 
                        Download Resume 
                    </a>
                </div>
                <img 
                    src = { require(`../assets/images/me/${about.imgUrl}.png`)}
                    alt = 'my image'
                    className = 'about-me-img'
                />
            </div>

        </section>
    )
}

export default About;