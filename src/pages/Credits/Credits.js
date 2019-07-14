import React from 'react';

import _profiles from './profiles';

import classes from './Credits.module.css'

// <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

const Credits = () => {
    const profiles = _profiles.map((profile) => {
        return (
            <div key={profile.id} className={classes.Profile}>
                <div className={classes.Frame}>
                    <div className={classes.Name}>
                        <span>{profile.name}</span>
                    </div>
                    <div className={classes.Picture}>
                        <img className={classes.Portrait} src={`img/${profile.id}.jpg`} alt={profile.name}></img>
                    </div>
                </div>
                <div className={classes.Description}>
                    <p>{`${profile.name}: ${profile.desc}`}</p>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.Credits}>
            {profiles}
        </div>
    )
}

export default Credits;
