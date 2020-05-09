import React from 'react';

import portfolioService from '../services/portfolioService';

const Footer = () => {
    const contactInfo = portfolioService.getFooterInfo();
    
    const contactInfoList = Object.entries(contactInfo).map(infoDetails => {
        const info = infoDetails[1];
        return (
            <li key = { info.link } className = 'contact-info-details'>
                <a className = 'contact-info-link' href = { info.link }>
                    <i className = { info.footerIcon }/>
                </a>
            </li>
        )
    })

    return (
        <section id = 'footer'>
            <h6 className = 'footer-credits'>Created & Designed By Nofar Peled</h6>
            <ul className = 'links-list clean-list'>
                {
                    contactInfoList
                }
            </ul>
        </section>
    )
}

export default Footer;

