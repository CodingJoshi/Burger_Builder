import React from 'react'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawerToggler from './SideDrawerToggler/SideDrawerToggler'
import classes from './Toolbar.module.css'

const Toolbar=(props)=>{
    return (
            <header className={classes.Toolbar}>
                <SideDrawerToggler
                    clicked={props.Toggle}/>
                <Logo height="80%"/>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems/>
                </nav>
            </header>
    );
} 

export default Toolbar;