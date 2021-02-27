import React from 'react'
import BuildControl from './buildControl/buildControl'
import classes from './buildControls.module.css'

const Items=[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls=(props)=>{
    // console.log(props.purchaseable);
    return (
        <div className={classes.BuildControls}>
            {Items.map(item => {
                return <BuildControl 
                    key={item.label} 
                    label={item.label}
                    type={item.type}
                    added={()=>props.ingredientAdded(item.type)}
                    removed={()=>props.ingredientRemoved(item.type)}
                    ingredient={props.ingredient}
                    disable={props.disable[item.type]}
                />
            })}
            <div className={classes.price}>Total Price:  <strong>{props.price.toFixed(2)}</strong></div>
            <button className={classes.OrderButton} 
                    disabled={!props.purchaseable}
                    onClick={props.ordering}
                    >ORDER NOW</button>
        </div>
    )
};

export default buildControls;