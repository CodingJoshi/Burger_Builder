import React from 'react'
import Aux from '../../hoc/Auxillary'

const layout=(props)=>{
    return (
        <Aux>
            <div> Toolbar sidedrawer Backdrop </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;