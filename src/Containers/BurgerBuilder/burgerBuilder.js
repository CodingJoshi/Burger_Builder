import React, {Component} from 'react'
import BuildControls from '../../Components/Burger/buildControls/BuildControls';
import Burger from '../../Components/Burger/Burger';
import Aux from '../../hoc/Auxilliary/Auxillary'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import Modal from '../../Components/UI/Modals/Modal';

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class burgerBuilder extends Component{
    state={
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice:4,
        purchaseable:false,
        purchasing:false,
    };
    
    updatePurchaseState=(IngredientCopy)=>{
        // let IngredientCopy={
        //     ...this.state.ingredient
        // }
        const sum=Object.values(IngredientCopy).reduce((sum,ele)=>sum+ele,0);
        this.setState({purchaseable:sum>0});
    }
   
    addIngredient=(type)=>{ 
        const oldCount=this.state.ingredient[type];
        const updatedCount=oldCount+1;
        const updatedIngredient={
            ...this.state.ingredient
        };
        updatedIngredient[type]=updatedCount;
        const newPrice=this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState(
            {
                totalPrice:newPrice,
                ingredient:updatedIngredient
            }
        )
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredient=(type)=>{
        const oldCount=this.state.ingredient[type];
        const updatedCount=oldCount-1;
        if(updatedCount<0) return;
        const updatedIngredient={
            ...this.state.ingredient
        };
        updatedIngredient[type]=updatedCount;
        const newPrice=this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState(
            {
                totalPrice:newPrice,
                ingredient:updatedIngredient
            }
        )
        this.updatePurchaseState(updatedIngredient);
    }

    PurchasingStateHandler=()=>{
        this.setState({purchasing:true});
    }

    cancelPurchase=()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler=()=>{
        alert('You Continued');
    }

    render(){
        let disableInfo={
            ...this.state.ingredient
        }
        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0;
        }
        // console.log(disableInfo);
        return(
            <Aux>
                <Burger ingredient={this.state.ingredient}/>
                <Modal show={this.state.purchasing} remove={this.cancelPurchase}>
                    <OrderSummary 
                    price={this.state.totalPrice}
                    purchaseContinue={this.purchaseContinueHandler}
                    purchaseCancel={this.cancelPurchase}
                    ingredient={this.state.ingredient}/>
                </Modal>
                <BuildControls
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    ingredient={this.state.ingredient}
                    price={this.state.totalPrice}
                    disable={disableInfo}
                    ordering={this.PurchasingStateHandler}
                    purchaseable={this.state.purchaseable}
                />
            </Aux>
        );
    };
}

export default burgerBuilder;