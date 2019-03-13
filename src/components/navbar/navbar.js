import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './navbar.module.css';

const navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default navbar;