import React from 'react';

import _profiles from './profiles';
import summary from './summary';
import classes from './About.module.css';

const About = () => {
    const profiles = _profiles.map((profile) => {
        return (
            <div>
                <p>{`${profile.name}: ${profile.desc}`}</p>
            </div>
        )
    })
    return (
        <div>
            <div className={classes.Summary}>{summary}</div>
            {profiles}
        </div>
    )
}

export default About;
