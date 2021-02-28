import React from 'react'
import Aux from '../../../hoc/Auxilliary/Auxillary'
import Button from '../../UI/Button/button'

const OrderSummary=(props)=>{
    const listItems= Object.keys(props.ingredient).map(
        (item)=>
            <li key={item}>
                <span style={{textTransform:'capitalize', fontWeight:'bold'}}>{item}</span>: {props.ingredient[item]}
            </li>
    ); 

    return (
        <Aux>
            <h1>Your Order</h1>
            <p>Order the burger with following Details</p>
            <ul>
                {listItems}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Want to checkout?</p>
            <Button clicked={props.purchaseCancel} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinue} btnType="Success">Continue</Button>
        </Aux>
    )
}

export default OrderSummary;