import React from 'react';

const TechList = props => {
    const { technologies } = props;
    
    const techList = technologies.map(tech => {        
        return (
            <li className = 'tech-preview' key = {tech._id}>
                <img 
                    className = 'tech-img'
                    src = { require(`../assets/images/technologies-icons/${tech.imgUrl}.png`)}
                    alt = 'tech icon'
                />
            </li>
        )
    })
    return (
        <ul className = 'tech-list clean-list'>
            {
                techList
            }
        </ul>
    )
}

export default TechList;