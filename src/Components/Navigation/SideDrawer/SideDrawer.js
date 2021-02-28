import React from 'react'
import Logo from '../../Logo/logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/Backdrops/BackDrop'
import Aux from '../../../hoc/Auxilliary/Auxillary'

const SideDrawer=(props)=>{
    console.log(props.show);
    let AttachClasses=[classes.SideDrawer, classes.Close]

    if(props.show){
        AttachClasses=[classes.SideDrawer, classes.Open]
    }

    return(
        <Aux>
            <BackDrop show={props.show} clicked={props.close}/>
            <div className={AttachClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};
export default SideDrawer;