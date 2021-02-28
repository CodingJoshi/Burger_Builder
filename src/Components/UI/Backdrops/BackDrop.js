import React from 'react'
import classes from './Backdrop.module.css'

const BackDrop=(props)=>{
    return (
        props.show? 
        <div className={classes.backDrop}
            onClick={props.clicked}>
        </div>
        : null
    )
}

export default BackDrop;