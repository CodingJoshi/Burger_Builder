import React from 'react'
import classes from './hamberger.module.css'

const SideDrawerToggler=(props)=>{
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};
export default SideDrawerToggler;