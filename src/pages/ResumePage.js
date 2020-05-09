import React from 'react';

import PreviosJobsList from '../components/PreviousJobsList';

import portfolioService from '../services/portfolioService';

const ResumePage = () => {
    const jobs = portfolioService.getJobs();
    console.log('resume');
    
    return (
        <section className = 'resume-page'>
            <h1>RESUME!</h1>
            <PreviosJobsList jobs = { jobs }/>
        </section>
    )
};

export default ResumePage;