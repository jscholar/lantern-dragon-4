import React from 'react';

import intro from './intro';
import classes from './Home.module.css';

const Home = (props) => {
    return (
        <div>
            <p className={classes.Intro}>
                {intro}
            </p>
        </div>
    )
}

export default Home;
