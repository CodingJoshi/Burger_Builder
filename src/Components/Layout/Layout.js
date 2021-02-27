import React from 'react'
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const layout=(props)=>{
    return (
        <Aux>
            <Toolbar></Toolbar>
            <main className={classes.mt}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;