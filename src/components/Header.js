import React from 'react';

import MainNavbar from './MainNavbar';
import SectionHeader from './SectionHeader';

const Header = () => {
    return (
        <section id = 'header'>
            <SectionHeader 
                payload = {{ 
                    className: 'header', 
                    title: 'The Best Things Come From Living Outside of Your Comfort Zone' 
                    }}
                />
            <MainNavbar />
            <div className = 'logo-name-div'>
                <h2 className = 'name'>Nofar</h2>
                <img 
                    className = 'header-logo' 
                    src = { require('../assets/images/logos/logo.png') } 
                    alt = 'website logo'
                />
                <h2 className = 'name'>Peled</h2>

            </div>

        </section>
    )
}

export default Header;