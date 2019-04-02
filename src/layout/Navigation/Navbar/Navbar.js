import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <nav className={classes.NavItems}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <i onClick={props.toggleSettings} className={"fas fa-cog " + classes.SettingsIcon}/>
        </div>
    )
}

export default Navbar;
