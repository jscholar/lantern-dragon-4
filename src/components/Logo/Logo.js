import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <Link to="/">
            <img src="img/lantern-logo.png" 
            alt="Lantern Dragon Works"
            title="Lantern Dragon Works"></img>
        </Link>
    </div>
);

export default Logo;
