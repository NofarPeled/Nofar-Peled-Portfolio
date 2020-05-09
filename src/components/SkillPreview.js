import React from 'react';

const SkillPreview = props => {
    const { skill } = props;
    return (
        <li className = 'skill-preview'>
            <img 
                className = 'skill-image'
                src = { require(`../assets/images/skills-icons/${skill.imgUrl}`) }
                alt = 'skill'
            />
            <h3 className = 'skill-title section-title'>{ skill.title}</h3>
            <p className = 'skill-description'>{ skill.description }</p>
        </li>
    )
}

export default SkillPreview;