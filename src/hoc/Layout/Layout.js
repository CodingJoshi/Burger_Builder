import React, {Component} from 'react'
import Aux from '../Auxilliary/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer:false
    }
    
    closeSideDrawer=()=>{
            this.setState({showSideDrawer:false})
    }

    ToggleSideDrawer=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return (
            <Aux>
                <Toolbar
                Toggle={this.ToggleSideDrawer}/>
                <SideDrawer 
                    show={this.state.showSideDrawer}
                    close={this.closeSideDrawer}
                />
                <main className={classes.mt}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
