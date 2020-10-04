import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { useState } from 'react';
import './Home.scss';

import List from '../components/List';
import Item from '../classes/Item';

function Home({ list, setList, user }) {
  const history = useHistory();
  const [item, setItem] = useState('');
  const [filters, setFilters] = useState({
    checked: true,
    unchecked: true
  });

  if (!user) {
    history.push('/');
  }

  const addItem = () => firebase
    .database()
    .ref(`/${user.uid}`)
    .push(new Item(item))
    .then(() => setItem(''));


  const signOut = () => firebase
    .auth()
    .signOut();

  return (
    <div className="Home">
      <div>
        <button onClick={signOut}>Sign Out</button>
        <div>
          <input value={item} onChange={e => setItem(e.target.value)} />
          <button onClick={addItem}>Add Item</button>
        </div>
        <div>
          <form>
            <div>
              <input id="all" type="radio" name="filters" value={(filters.checked && filters.unchecked)} defaultChecked onChange={e => setFilters({
                checked: true,
                unchecked: true
              })} />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input id="checked" type="radio" name="filters" value={filters.checked} onChange={e => setFilters({
                checked: true,
                unchecked: false
              })} />
              <label htmlFor="checked">Checked</label>
            </div>
            <div>
              <input id="unchecked" type="radio" name="filters" value={filters.unchecked} onChange={e => setFilters({
                checked: false,
                unchecked: true
              })} />
              <label htmlFor="unchecked">Unchecked</label>
            </div>
          </form>
        </div>
      </div>
      <List list={list} setList={setList} filters={filters} user={user} />
    </div>
  );
}

export default Home;