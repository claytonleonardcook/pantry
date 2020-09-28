import React from 'react';
import { useState } from 'react';
import './Home.scss';

import List from '../components/List';

function Home() {
  let [input, setInput] = useState('');
  let [items, setItems] = useState([0, 1, 2, 3]);
  return (
    <div className="Home">
      <List items={items}/>
    </div>
  );
}

export default Home;