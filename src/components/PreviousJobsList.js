import React from 'react';

import PreviousJobPreview from './PreviousJobPreview';

const PreviousJobsList = props => {
    const { jobs } = props; 

    const jobsList = jobs.map(job => {
        return (
            <PreviousJobPreview key = { job._id } job = { job }/>
        );
    });

    return (
        <ul className = 'previous-jobs-list clean-list'>
            {
                jobsList
            }
        </ul>
    );
};

export default PreviousJobsList;