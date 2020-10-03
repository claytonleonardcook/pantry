import React from 'react';
import { useState } from 'react';
import './Home.scss';

import List from '../components/List';

function Home() {
  let [list, setList] = useState(
    {
      Milk: true,
      Eggs: false,
      Vegtables: false,
      Meat: true
    }
  );
  let [sortedList, setSortedList] = useState([]);

  return (
    <div className="Home">
      <div>
        <div>
          <input id='addItem' placeholder='Add Item' />
          <button onClick={() => {
            let newList = list;
            newList[document.querySelector('input#addItem').value] = false
            setList(newList);
            document.querySelector('input#addItem').value = null;
          }}>+</button>
        </div>
        <div>
          <form>
            <div>
              <input type='radio' name='filter' value='All' defaultChecked onChange={() => {
                setSortedList(Object.entries(list));
              }} />
              <label>All</label>
            </div>
            <div>
              <input type='radio' name='filter' value='Checked' onChange={() => {
                setSortedList(Object.entries(list).filter((item) => {
                  return item[1] ? [item[0], item[1]] : null;
                }));
              }} />
              <label>Checked</label>
            </div>
            <div>
              <input type='radio' name='filter' value='Unchecked' onChange={() => {
                setSortedList(Object.entries(list).filter((item) => {
                  return !item[1] ? [item[0], item[1]] : null;
                }));
              }}/>
              <label>Unchecked</label>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <List list={sortedList} />
    </div>
  );
}

export default Home;