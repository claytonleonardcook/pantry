import React from 'react';
import { useState, useEffect } from 'react';
import './List.scss';

function List() {
    let [items, setItems] = useState([0, 1, 2, 3]);

    useEffect(() => {

    });

    return (
        <div className="List">
            My List
            <input placeholder="Add Item" />
            <button>+</button>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default List;