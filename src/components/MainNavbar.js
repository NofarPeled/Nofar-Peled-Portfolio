import React, { useState } from 'react';

const MainNavbar = () => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <section className = { `main-navbar ${isHidden ? 'hide' : ''}`} onClick = { () => setIsHidden(!isHidden) }>
            <button className = 'menu-button'>
                <i className="fas fa-bars"/>
            </button>
            <nav className = 'header-navbar'>
                <a href = { process.env.PUBLIC_URL+'/' }>Home</a>
                <a href = { process.env.PUBLIC_URL+'/#skills' }>Skills</a>
                <a href = { process.env.PUBLIC_URL + '/#projects' }>Projects</a>
                <a href = { process.env.PUBLIC_URL + '/resume' }>Resume</a> 
                <a href = { process.env.PUBLIC_URL + '/#about' }>About</a>
                <a href = { process.env.PUBLIC_URL + '/#contact' }>Contact</a>
            </nav>
        </section>
    )
}

export default MainNavbar;