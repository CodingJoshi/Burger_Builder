import React from 'react'
// import Aux from '../../hoc/Auxillary';
import BurgerIngredient from './BurgerIngredients/burgerIngredient';
import classes from './Burger.module.css'
const burger =()=>{
    return (
      <div className={classes.burger}>
          <BurgerIngredient type="bread-top"/>
          <BurgerIngredient type="cheese"/>
          <BurgerIngredient type="bread-bottom"/>
      </div>
    );
}

export default burger;