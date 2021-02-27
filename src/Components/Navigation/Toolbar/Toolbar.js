import React from 'react'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'

const Toolbar=(props)=>{
    return (
        <header className={classes.Toolbar}>
            <div>Home</div>
            <Logo/>
            <NavigationItems/>
        </header>
    );
}

export default Toolbar;