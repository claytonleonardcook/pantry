import React from 'react';
import './Item.scss';

import ToggleBox from '../branded/ToggleBox';

function Item(props) {
    return (
        <li className="Item">
            <ToggleBox />
            {props.value}
        </li>
    );
}

export default Item;