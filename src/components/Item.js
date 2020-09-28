import React from 'react';
import './Item.scss';

function Item(props) {
    return (
        <li className="Item">
            <input type="checkbox" />
            {props.value}
        </li>
    );
}

export default Item;