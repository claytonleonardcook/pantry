import React from 'react';
import './Item.scss';

function Item(props) {
    console.log(props.value)
    return (
        <li className="Item">
            <input type="checkbox" />
            {props.value[0]}
        </li>
    );
}

export default Item;