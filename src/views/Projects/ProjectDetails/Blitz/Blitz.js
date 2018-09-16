import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';

const Blitz = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.Blitz.name}
                </h1>
            </div>
            <span className="container">
                <p>
                    {projectsInfo.Blitz.description}
                </p>
            </span>
        </span>
    </div>
)

export default Blitz;