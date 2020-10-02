import React from 'react';
import './List.scss';

import Item from './Item';

function List(props) {
    return (
        <ul className="List">
            {
                props.list.map((item, index) => (
                    <Item key={index} value={item} />
                ))
            }
        </ul>
    );
}

export default List;