import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './navbar.module.css';

const navbar = (props) => {
    return (
        <nav className={classes.Navbar}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default navbar;