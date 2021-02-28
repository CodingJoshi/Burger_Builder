import React from 'react'
import BurgerLogo from '../../assests/img/Burger-logo.png'
import classes from './logo.module.css'

const Logo=(props)=>{
    return(
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    );
};

export default Logo;