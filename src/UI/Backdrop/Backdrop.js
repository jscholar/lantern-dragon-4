import React from 'react';

import classes from './backdrop.module.css'

const Backdrop = (props) => (
    <div className={classes.Backdrop} onClick={props.hideModal}></div>
);

export default Backdrop;
