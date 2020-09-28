import React from 'react';
import { useState, useEffect } from 'react';
import './List.scss';

import Item from './Item';
import Input from '../branded/Input';
import Button from '../branded/Button';

function List() {
    let [input, setInput] = useState('');
    let [items, setItems] = useState([0, 1, 2, 3]);

    return (
        <div className="List">
            My List
            <Input placeholder="Add Item" value={input} onChange={(e)=>{
                setInput(e.target.value);
            }}/>
            <Button onClick={() => {
                setItems([...items, input]);
            }} />
            <ul>
                {
                    items.map((item, index) => (
                        <Item key={index} value={item} />
                    ))
                }
            </ul>
        </div>
    );
}

export default List;