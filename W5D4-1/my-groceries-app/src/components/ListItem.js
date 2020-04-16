import React from 'react';

function ListItem (props){
    const {title, clickHandler} = props;
    return(
        <li onClick={clickHandler}>{title}</li>
    )
}

export default ListItem;