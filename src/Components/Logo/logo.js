import React from 'react'
import BurgerLogo from '../../assests/img/Burger-logo.png'
import classes from './logo.module.css'

const Logo=()=>{
    return(
        <div className={classes.Logo}>
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    );
};

export default Logo;