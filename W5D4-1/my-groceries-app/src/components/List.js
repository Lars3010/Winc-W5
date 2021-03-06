import React from 'react';
import ListItem from './ListItem.js';

function List(props) {    
    const items = props.list.map(item => {
        return (
            <ListItem key={item.id} title={item.title} className='list-item' clickHandler={props.clickHandler} amount={props.readOnly ? item.amount : null}/>
        )
    })

    return (
        <ul>
            {items}
        </ul>
    )
}

export default List;
