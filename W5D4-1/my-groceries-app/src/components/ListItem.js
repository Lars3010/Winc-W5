import React from 'react';

function ListItem (props){
    const {title, clickHandler, amount} = props;
    const showAmount = amount ? `Amount: ${amount}` : null;
    return(
        <li onClick={clickHandler}>{title} {showAmount}</li>
    )
}

export default ListItem;