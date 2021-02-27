import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const NavigationItems=(props)=>{
  return(
    <ul className={classes.Items}>
        <NavigationItem link='\' active={true}>Burger Builder</NavigationItem>
        <NavigationItem link='\'>Checkout</NavigationItem>
    </ul>
  );  
};

export default NavigationItems;