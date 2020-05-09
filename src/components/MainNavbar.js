import React, { useState } from 'react';

const MainNavbar = () => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <section className = { `main-navbar ${isHidden ? 'hide' : ''}`} onClick = { () => setIsHidden(!isHidden) }>
            <button className = 'menu-button'>
                <i className="fas fa-bars"/>
            </button>
            <nav className = 'header-navbar'>
                <a href = '/'>Home</a>
                <a href = '/#skills'>Skills</a>
                <a href = '/#projects'>Projects</a>
                <a href = '/resume'>Resume</a>
                <a href = '/#about'>About</a>
                <a href = '/#contact'>Contact</a>
            </nav>
        </section>
    )
}

export default MainNavbar;