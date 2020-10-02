import React from 'react';
import { useState } from 'react';
import './Home.scss';

import List from '../components/List';

function Home() {
  let [list, setList] = useState(['Milk', 'Vegatables', 'Fruit', 'Eggs']);
  let [sortedList, setSortedList] = useState([]);
  return (
    <div className="Home">
      <div>
        <div>
          <input id='addItem' placeholder='Add Item' />
          <button onClick={() => {
            setList([...list, document.querySelector('input#addItem').value]);
            document.querySelector('input#addItem').value = null;
          }}>+</button>
        </div>
        <div>
          <button onClick={() => {
            setSortedList(list);
          }}>All</button>
          <button onClick={() => {
            //setSortedList(list.filter());
          }}>Checked</button>
          <button>Unchecked</button>
        </div>
      </div>
      <hr />
      <List list={sortedList} />
    </div>
  );
}

export default Home;