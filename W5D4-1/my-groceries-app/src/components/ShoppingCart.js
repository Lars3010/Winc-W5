import React from 'react';
import List from './List.js';

function ShoppingCart(props){
    return(
        <div>
            <button onClick={props.clickHandler}>Leeg de winkelmand</button>
            <List list={props.shoppingListItems} readOnly={true}/>
        </div>
    )
}

export default ShoppingCart;