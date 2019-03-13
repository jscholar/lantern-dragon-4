import React from 'react';
import PROFILES from './profiles';

const about = () => {
    const profiles = PROFILES.map((profile) => {
        return (
            <div>
                <p>{`${profile.name}: ${profile.desc}
                `}</p>
            </div>
        )
    })
    return (
        <div>
            {profiles}
        </div>
    )
}

export default about;