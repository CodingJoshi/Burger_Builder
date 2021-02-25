import React, {Component} from 'react'
import Burger from '../../Components/Burger/Burger';
import Aux from '../../hoc/Auxillary'

class burgerBuilder extends Component{
    render(){
        return(
            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        );
    };
}

export default burgerBuilder;