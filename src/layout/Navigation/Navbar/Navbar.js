import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <nav className={classes.NavItems}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/Credits">Credits</NavLink>
            </nav>

        </div>
    )
}

export default Navbar;
