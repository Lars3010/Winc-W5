import React from 'react';
import List from './List.js';

function ShoppingCart(props){
    return(
        <div>
            <button onClick={props.clickHandler}>Leeg de winkelmand</button>
            <List list={props.shoppingListItems}/>
        </div>
    )
}

export default ShoppingCart;