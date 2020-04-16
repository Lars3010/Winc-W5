import React from 'react';
import List from './List.js';
import InputField from './InputField.js';

function GroceryList(props){
    return(
        <div>
            <InputField onFormSubmit={props.onFormSubmit} />
            <List list={props.groceryItems} clickHandler={props.clickHandler}/>
        </div>
    )
}

export default GroceryList;