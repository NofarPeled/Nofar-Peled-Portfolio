import React from 'react';

const PreviousJobPreview = props => {
    const { job } = props
    return (
        <li className = 'previous-job-preview'>
            <h3 className = 'job-title'> { job.title } </h3>
        </li>
    )
}

export default PreviousJobPreview;