import React from 'react';

import classes from './Navbar.module.css';
import NavbarItem from './Navbar-Item';

const Navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <nav className={classes.NavItems}>
                <NavbarItem path="/" exact label="Home"></NavbarItem>
                <NavbarItem path="/libary" label="Library"></NavbarItem>
                <NavbarItem path="/gallery" label="Gallery"></NavbarItem>
                <NavbarItem path="/extras" label="Extras"></NavbarItem>
                <NavbarItem path="/credits" label="Credits"></NavbarItem>
            </nav>
        </div>
    )
}

export default Navbar;
