import React from 'react'
import Logo from '../../Logo/logo'
import classes from './Toolbar.module.css'

const Toolbar=(props)=>{
    return (
        <header className={classes.Toolbar}>
            <div>Home</div>
            <Logo/>
            <nav>...</nav>
        </header>
    );
}

export default Toolbar;