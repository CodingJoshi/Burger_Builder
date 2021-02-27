import React from 'react'
import BurgerIngredient from './BurgerIngredients/burgerIngredient';
import classes from './Burger.module.css'

const burger =(props)=>{
  let burgeritems=Object.keys(props.ingredient)
      .map(itemKey=>{
        return [...Array(props.ingredient[itemKey])].map(
          (__,i)=>{
            return <BurgerIngredient key={itemKey+i} type={itemKey}/>
          }
        );
      });
  burgeritems=burgeritems.reduce((arr,ele)=>{
    return arr.concat(ele);
  },[])

  if(!burgeritems.length){
    burgeritems=<div>Add some ingredients</div>
  }

  // console.log(burgeritems);
    return (
      <div className={classes.burger}>
          <BurgerIngredient type="bread-top"/>
            {burgeritems}
          <BurgerIngredient type="bread-bottom"/>
      </div>
    );
}

export default burger;