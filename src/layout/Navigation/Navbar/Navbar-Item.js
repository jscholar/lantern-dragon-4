import React from 'react';

import {NavLink} from 'react-router-dom';
import classes from './Navbar-Item.module.css';

const NavbarItem = (props) => (
    <NavLink exact activeClassName={classes.active} to={props.path}>
        <div className={classes.NavbarItem}>
            <div className={classes.Light}></div>
            {props.label}
        </div>
    </NavLink>
);

export default NavbarItem;
