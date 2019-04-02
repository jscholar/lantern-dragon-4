import React from 'react';
import classes from './modal.module.css';

import Aux from '../../../hoc/Auxilliary/Auxilliary'

const modal = (props) => (
    <Aux>
        <div className={classes.Modal}>
                {props.children}
        </div>
    </Aux>

);

export default modal;
