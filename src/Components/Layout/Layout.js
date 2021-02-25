import React from 'react'
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'

const layout=(props)=>{
    return (
        <Aux>
            <div> Toolbar sidedrawer Backdrop </div>
            <main className={classes.mt}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;