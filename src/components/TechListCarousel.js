import React from 'react';

const TechListCarousel = props => {
    const { technologies } = props;

    const techList = technologies.map(tech => {
        return (
            <li className = 'tech-preview'>
                <h2 className = 'tech-title'>{ tech.title }</h2>
                <img 
                    className = 'tech-img'
                    src = { require(`../assets/images/technologies-icons/${tech.imgUrl}`)}
                    alt = 'tech icon'
                />
            </li>
        )
    })
    return (
        <section className = 'tech-list-carousel'>
            <ul className = 'tech-list'>
                
            </ul>
        </section>
    )
}

export default TechListCarousel;