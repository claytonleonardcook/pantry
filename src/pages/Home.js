import React from 'react';
import { useState } from 'react';
import './Home.scss';

import List from '../components/List';

function Home() {
  let [items, setItems] = useState(['Milk', 'Vegatables', 'Fruit', 'Eggs']);
  return (
    <div className="Home">
      <div>
        <h1>My List</h1>
        <input placeholder='Add Item' onKeyDown={(e) => {
          if(e.key === 'Enter') {
            setItems([...items, e.target.value]);
          }
        }}/>
      </div>
      <hr />
      <List items={items} />
    </div>
  );
}

export default Home;