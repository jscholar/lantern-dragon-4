import React from 'react';

import _profiles from './profiles';

// <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

const Credits = () => {
    const profiles = _profiles.map((profile) => {
        return (
            <div>
                <p>{`${profile.name}: ${profile.desc}`}</p>
            </div>
        )
    })
    return (
        <div>
            {profiles}
        </div>
    )
}

export default Credits;
